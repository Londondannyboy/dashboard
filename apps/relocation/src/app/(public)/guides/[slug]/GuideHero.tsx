'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface GuideHeroProps {
  title: string
  country: string | null
  flag: string | null
  videoUrl: string | null
  imageUrl: string | null
  imageAlt: string | null
  targetKeyword?: string | null
}

export function GuideHero({ title, country, flag, videoUrl, imageUrl, imageAlt, targetKeyword }: GuideHeroProps) {
  // Generate SEO-friendly alt text
  const seoAlt = imageAlt ||
    (targetKeyword ? `${targetKeyword.replace(/-/g, ' ')} - ${country} landscape` : null) ||
    `Moving to ${country} - aerial view of ${country} landscape`
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
        setVideoError(true)
      })
    }
  }, [videoUrl])

  const showVideo = videoUrl && !videoError

  return (
    <header className="relative pt-16 min-h-[400px] md:min-h-[500px]">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {showVideo ? (
          <>
            {/* Video */}
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Fallback image while video loads */}
            {!isVideoLoaded && imageUrl && (
              <Image
                src={imageUrl}
                alt={seoAlt}
                title={`Guide to ${targetKeyword?.replace(/-/g, ' ') || `moving to ${country}`}`}
                fill
                className="object-cover"
                priority
              />
            )}
          </>
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt={seoAlt}
            title={`Guide to ${targetKeyword?.replace(/-/g, ' ') || `moving to ${country}`}`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100" />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-3xl">
          {/* Country Badge */}
          {country && (
            <div className="flex items-center gap-3 mb-4">
              {flag && <span className="text-4xl drop-shadow-lg">{flag}</span>}
              <span className="px-4 py-1.5 bg-amber-500 text-white rounded-full text-sm font-semibold shadow-lg">
                Country Guide
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight drop-shadow-sm">
            {title}
          </h1>

          {/* Video Attribution */}
          {showVideo && (
            <p className="mt-6 text-sm text-gray-500">
              Video from{' '}
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500"
              >
                Pexels
              </a>
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
