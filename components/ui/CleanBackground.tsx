'use client'

import { cn } from '@/components/lib/utils'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'

export const CleanBackground = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 200,
      translateX: 200,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: 'h-6',
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 300,
      translateX: 300,
      duration: 11,
      repeatDelay: 2,
      className: 'h-20',
    },
    {
      initialX: 500,
      translateX: 500,
      duration: 4,
      repeatDelay: 2,
      className: 'h-12',
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: 'h-6',
    },
  ]

  return (
    <div
      className={cn(
        'relative mx-auto flex min-h-[500px] w-full max-w-3xl flex-col items-start justify-center overflow-hidden p-5 px-4 sm:px-6 md:min-h-[600px] xl:max-w-5xl xl:px-0',
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10" />

      {/* Decorative blur elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-100/20 blur-3xl dark:bg-blue-900/10" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-100/20 blur-3xl dark:bg-purple-900/10" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated beams - more visible */}
      {beams.map((beam, index) => (
        <motion.div
          key={`beam-${index}`}
          animate="animate"
          initial={{
            translateY: '-200px',
            translateX: beam.initialX + 'px',
            rotate: 0,
          }}
          variants={{
            animate: {
              translateY: '1800px',
              translateX: beam.translateX + 'px',
              rotate: 0,
            },
          }}
          transition={{
            duration: beam.duration || 8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: beam.delay || 0,
            repeatDelay: beam.repeatDelay || 0,
          }}
          className={cn(
            'absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-blue-500/40 via-purple-500/40 to-transparent dark:from-blue-400/30 dark:via-purple-400/30',
            beam.className
          )}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Bottom shadow/container */}
      <div ref={containerRef} className="pointer-events-none absolute inset-x-0 bottom-0 w-full" />
    </div>
  )
}
