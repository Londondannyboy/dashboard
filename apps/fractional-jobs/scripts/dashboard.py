#!/usr/bin/env python3
"""
Fractional Job News - Control Dashboard

Visual interface to control and monitor article generation.
Run with: streamlit run dashboard.py

Features:
- ✅ See if generator is running
- ✅ Start/Stop/Pause controls
- ✅ Real-time cost tracker
- ✅ Recent articles list
- ✅ Test generation button
- ✅ Live logs
"""

import streamlit as st
import subprocess
import os
import json
from datetime import datetime, timedelta
import psycopg2
from pathlib import Path

# Page config
st.set_page_config(
    page_title="Fractional Job News Control",
    page_icon="📰",
    layout="wide"
)

# Paths
SCRIPT_DIR = Path(__file__).parent
SCHEDULER_PID_FILE = SCRIPT_DIR / ".scheduler.pid"
PAUSE_FILE = SCRIPT_DIR / ".pause"
LOG_FILE = SCRIPT_DIR / "generator.log"

# Database connection
DATABASE_URL = os.getenv('DATABASE_URL')

def get_db():
    """Connect to Neon database"""
    return psycopg2.connect(DATABASE_URL)

def is_scheduler_running():
    """Check if scheduler is running"""
    if not SCHEDULER_PID_FILE.exists():
        return False

    try:
        pid = int(SCHEDULER_PID_FILE.read_text())
        # Check if process exists
        os.kill(pid, 0)
        return True
    except:
        return False

def is_paused():
    """Check if scheduler is paused"""
    return PAUSE_FILE.exists()

def start_scheduler():
    """Start the scheduler"""
    if is_scheduler_running():
        return False, "Already running"

    # Start scheduler in background
    process = subprocess.Popen(
        ['tsx', 'scheduler.ts'],
        cwd=SCRIPT_DIR,
        stdout=open(LOG_FILE, 'a'),
        stderr=subprocess.STDOUT
    )

    # Save PID
    SCHEDULER_PID_FILE.write_text(str(process.pid))
    return True, f"Started with PID {process.pid}"

def stop_scheduler():
    """Stop the scheduler"""
    if not SCHEDULER_PID_FILE.exists():
        return False, "Not running"

    try:
        pid = int(SCHEDULER_PID_FILE.read_text())
        os.kill(pid, 15)  # SIGTERM
        SCHEDULER_PID_FILE.unlink()
        return True, "Stopped"
    except Exception as e:
        return False, str(e)

def pause_scheduler():
    """Pause the scheduler"""
    PAUSE_FILE.write_text(datetime.now().isoformat())
    return True, "Paused"

def resume_scheduler():
    """Resume the scheduler"""
    if PAUSE_FILE.exists():
        PAUSE_FILE.unlink()
        return True, "Resumed"
    return False, "Not paused"

def get_recent_articles(limit=10):
    """Get recent articles from database"""
    try:
        conn = get_db()
        cur = conn.cursor()

        cur.execute("""
            SELECT
                title,
                slug,
                role,
                published_at,
                payload->>'company' as company,
                payload->>'salary' as salary
            FROM articles
            WHERE app = 'fractional-jobs'
            ORDER BY published_at DESC
            LIMIT %s
        """, (limit,))

        articles = []
        for row in cur.fetchall():
            articles.append({
                'title': row[0],
                'slug': row[1],
                'role': row[2],
                'published_at': row[3],
                'company': row[4],
                'salary': row[5]
            })

        cur.close()
        conn.close()
        return articles
    except Exception as e:
        st.error(f"Database error: {e}")
        return []

def get_stats():
    """Get generation statistics"""
    try:
        conn = get_db()
        cur = conn.cursor()

        cur.execute("""
            SELECT
                COUNT(*) as total,
                COUNT(*) FILTER (WHERE published_at > NOW() - INTERVAL '24 hours') as today,
                COUNT(*) FILTER (WHERE published_at > NOW() - INTERVAL '7 days') as this_week,
                COUNT(*) FILTER (WHERE published_at > NOW() - INTERVAL '30 days') as this_month
            FROM articles
            WHERE app = 'fractional-jobs'
        """)

        row = cur.fetchone()
        stats = {
            'total': row[0],
            'today': row[1],
            'this_week': row[2],
            'this_month': row[3]
        }

        cur.close()
        conn.close()
        return stats
    except Exception as e:
        st.error(f"Database error: {e}")
        return {'total': 0, 'today': 0, 'this_week': 0, 'this_month': 0}

def run_test_generation():
    """Run a test generation"""
    result = subprocess.run(
        ['tsx', 'control.ts', 'test'],
        cwd=SCRIPT_DIR,
        capture_output=True,
        text=True
    )
    return result.stdout + result.stderr

def run_single_generation():
    """Run a single generation"""
    result = subprocess.run(
        ['tsx', 'control.ts', 'once'],
        cwd=SCRIPT_DIR,
        capture_output=True,
        text=True
    )
    return result.stdout + result.stderr

# ===== DASHBOARD UI =====

st.title("📰 Fractional Job News Control Panel")
st.markdown("---")

# Top status bar
col1, col2, col3 = st.columns(3)

with col1:
    if is_scheduler_running():
        if is_paused():
            st.warning("⏸️ **Status**: PAUSED")
        else:
            st.success("✅ **Status**: RUNNING")
    else:
        st.error("❌ **Status**: STOPPED")

with col2:
    stats = get_stats()
    cost_per_article = 0.05
    total_cost = stats['total'] * cost_per_article
    st.metric("💰 Total Cost", f"${total_cost:.2f}")

with col3:
    st.metric("📊 Total Articles", stats['total'])

st.markdown("---")

# Control buttons
col1, col2, col3, col4, col5 = st.columns(5)

with col1:
    if st.button("▶️ Start", use_container_width=True, type="primary"):
        success, msg = start_scheduler()
        if success:
            st.success(msg)
            st.rerun()
        else:
            st.error(msg)

with col2:
    if st.button("⏹️ Stop", use_container_width=True):
        success, msg = stop_scheduler()
        if success:
            st.success(msg)
            st.rerun()
        else:
            st.error(msg)

with col3:
    if st.button("⏸️ Pause", use_container_width=True):
        success, msg = pause_scheduler()
        if success:
            st.warning(msg)
            st.rerun()
        else:
            st.error(msg)

with col4:
    if st.button("▶️ Resume", use_container_width=True):
        success, msg = resume_scheduler()
        if success:
            st.success(msg)
            st.rerun()
        else:
            st.error(msg)

with col5:
    if st.button("🧪 Test", use_container_width=True):
        with st.spinner("Running test generation..."):
            output = run_test_generation()
            st.code(output, language='text')

st.markdown("---")

# Statistics cards
col1, col2, col3, col4 = st.columns(4)

with col1:
    st.metric("📅 Today", stats['today'])
    st.caption(f"${stats['today'] * cost_per_article:.2f}")

with col2:
    st.metric("📊 This Week", stats['this_week'])
    st.caption(f"${stats['this_week'] * cost_per_article:.2f}")

with col3:
    st.metric("📈 This Month", stats['this_month'])
    st.caption(f"${stats['this_month'] * cost_per_article:.2f}")

with col4:
    avg_per_day = stats['this_month'] / 30 if stats['this_month'] > 0 else 0
    st.metric("⌀ Per Day", f"{avg_per_day:.1f}")
    st.caption(f"${avg_per_day * cost_per_article:.2f}/day")

st.markdown("---")

# Tabs
tab1, tab2, tab3 = st.tabs(["📰 Recent Articles", "📜 Logs", "⚙️ Actions"])

with tab1:
    st.subheader("Recent Articles")

    articles = get_recent_articles(20)

    if articles:
        for article in articles:
            with st.expander(f"**{article['title']}**"):
                col1, col2 = st.columns(2)
                with col1:
                    st.write(f"🏢 **Company**: {article['company']}")
                    st.write(f"👔 **Role**: {article['role'].upper()}")
                with col2:
                    st.write(f"💰 **Salary**: {article['salary'] or 'Not specified'}")
                    st.write(f"📅 **Published**: {article['published_at'].strftime('%Y-%m-%d %H:%M')}")

                st.link_button(
                    "🔗 View Article",
                    f"https://fractional.quest/{article['slug']}",
                    use_container_width=True
                )
    else:
        st.info("No articles published yet")

with tab2:
    st.subheader("Generation Logs")

    if LOG_FILE.exists():
        # Show last 50 lines
        with open(LOG_FILE) as f:
            lines = f.readlines()
            last_lines = ''.join(lines[-50:])
            st.code(last_lines, language='text')
    else:
        st.info("No logs available yet")

with tab3:
    st.subheader("Quick Actions")

    col1, col2 = st.columns(2)

    with col1:
        st.markdown("### 🚀 Generate Now")
        if st.button("Generate ONE Article", use_container_width=True, type="primary"):
            with st.spinner("Generating article..."):
                output = run_single_generation()
                st.code(output, language='text')

    with col2:
        st.markdown("### 🗑️ Clear Pause")
        if st.button("Remove Pause File", use_container_width=True):
            if PAUSE_FILE.exists():
                PAUSE_FILE.unlink()
                st.success("Pause file removed")
                st.rerun()
            else:
                st.info("Not paused")

# Footer
st.markdown("---")
st.caption("💡 Keep this dashboard open to monitor generation. It updates every refresh.")
st.caption("🔄 Auto-refresh: Enable browser auto-refresh extension for live monitoring")

# Auto-refresh every 30 seconds
st_autorefresh = st.empty()
with st_autorefresh:
    if st.button("🔄 Refresh Now"):
        st.rerun()
