'use client'

import MuxPlayer from '@mux/mux-player-react'
import type { CSSProperties } from 'react'

interface HomeVideoHeroProps {
  playbackId: string
}

interface MuxStyleProps extends CSSProperties {
  '--controls'?: string
}

export function HomeVideoHero({ playbackId }: HomeVideoHeroProps) {
  const muxStyle: MuxStyleProps = { '--controls': 'none' }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <MuxPlayer
        playbackId={playbackId}
        autoPlay="muted"
        loop
        muted
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto opacity-40"
        // @ts-expect-error Mux CSS variable
        style={muxStyle}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
    </div>
  )
}
