'use client'

import { useState, useRef, useEffect } from 'react'
import { useUser } from '@stackframe/stack'

// UI Component types
interface Article {
  title: string
  url: string
  image?: string
  excerpt?: string
  country?: string
}

// Country Card Component - uses MUX images from database
function CountryCard({ data }: { data: any }) {
  const bgImage = data.image
  const hasImage = !!bgImage

  return (
    <div
      className="relative rounded-2xl overflow-hidden h-48 bg-cover bg-center"
      style={
        hasImage
          ? { backgroundImage: `url(${bgImage})` }
          : { background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)' }
      }
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-5 text-white">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{data.flag}</span>
          <div>
            <h3 className="text-xl font-bold">{data.name}</h3>
            <p className="text-sm opacity-80">
              {data.capital} · {data.language} · {data.currency}
            </p>
          </div>
        </div>
        {data.facts && (
          <div className="flex gap-4 text-xs mt-2">
            {data.facts.cost_of_living_single && (
              <span>💰 {data.facts.cost_of_living_single}</span>
            )}
            {data.facts.dn_visa_cost && (
              <span>🛂 {data.facts.dn_visa_cost}</span>
            )}
          </div>
        )}
        <button
          className="mt-3 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition w-fit"
          onClick={() =>
            window.open(
              `/articles?country=${data.slug || data.name.toLowerCase()}`,
              '_blank'
            )
          }
        >
          Explore {data.name} →
        </button>
      </div>
    </div>
  )
}

// Article Grid Component
function ArticleGrid({ data }: { data: { articles: Article[] } }) {
  if (!data.articles || data.articles.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.articles.map((article, i) => (
        <article
          key={i}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100 dark:border-gray-700"
          onClick={() => window.open(article.url, '_blank')}
        >
          {article.image && (
            <div className="h-32 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4">
            {article.country && (
              <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-full">
                {article.country}
              </span>
            )}
            <h4 className="font-semibold mt-2 text-gray-900 dark:text-white line-clamp-2">
              {article.title}
            </h4>
            {article.excerpt && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {article.excerpt}
              </p>
            )}
            <span className="text-amber-600 dark:text-amber-400 text-sm font-medium mt-2 inline-block">
              Read article →
            </span>
          </div>
        </article>
      ))}
    </div>
  )
}

// Sources List
function SourcesList({
  sources,
}: {
  sources: Array<{ title: string; url: string; id: string }>
}) {
  if (!sources || sources.length === 0) return null

  return (
    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Sources:</p>
      <div className="flex flex-wrap gap-2">
        {sources.map((source, i) => (
          <a
            key={i}
            href={source.url}
            onClick={(e) => {
              e.preventDefault()
              window.open(source.url, '_blank')
            }}
            className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition text-gray-700 dark:text-gray-300"
          >
            📎 {source.title}
          </a>
        ))}
      </div>
    </div>
  )
}

// Message type
interface Message {
  role: 'user' | 'assistant'
  content: string
  components?: any[]
  sources?: Array<{ title: string; url: string; id: string }>
}

interface SmartChatProps {
  onMessageSent?: () => void
}

export default function SmartChat({ onMessageSent }: SmartChatProps) {
  const user = useUser()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Notify parent that a message was sent (for trial tracking)
    onMessageSent?.()

    try {
      const response = await fetch('/api/chat/smart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(user?.id && { 'x-stack-user-id': user.id }),
        },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage },
          ],
        }),
      })

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.mainText || data.message || "Here's what I found:",
          components: data.components || [],
          sources: data.sources || [],
        },
      ])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    'Tell me about Cyprus',
    'Best countries for digital nomads',
    'Cost of living in Portugal',
    'Visa options in France',
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Ask me anything about relocation
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              I can help with visa information, cost of living, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInput(q)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition text-gray-700 dark:text-gray-300"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] ${
                  message.role === 'user'
                    ? 'bg-purple-600 text-white rounded-2xl rounded-br-md px-4 py-3'
                    : 'bg-white dark:bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-700'
                }`}
              >
                <p
                  className={
                    message.role === 'user'
                      ? 'text-white'
                      : 'text-gray-900 dark:text-white'
                  }
                >
                  {message.content}
                </p>

                {/* Render UI components */}
                {message.components && message.components.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {message.components.map((component, j) => {
                      if (component.type === 'country_card') {
                        return <CountryCard key={j} data={component.data} />
                      }
                      if (component.type === 'article_grid') {
                        return <ArticleGrid key={j} data={component.data} />
                      }
                      return null
                    })}
                  </div>
                )}

                {/* Sources */}
                {message.sources && <SourcesList sources={message.sources} />}
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
                <div
                  className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: '0.1s' }}
                />
                <div
                  className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about relocating abroad..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
