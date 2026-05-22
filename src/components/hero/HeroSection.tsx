'use client'

import { gsap } from 'gsap'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLayoutEffect, useRef } from 'react'
import { site } from '@/lib/data/site'
import HeroTag from './HeroTag'
import HeroHeading from './HeroHeading'
import HeroTagline from './HeroTagline'
import HeroCtas from './HeroCtas'
import HeroStats from './HeroStats'
import ensureGsapPlugins from '@/lib/gsap'

const PARTICLES: {
  x: string
  y: string
  size: number
  delay: number
  duration: number
}[] = [
  { x: '6%', y: '18%', size: 3, delay: 0, duration: 4.2 },
  { x: '15%', y: '72%', size: 2, delay: 0.9, duration: 5.1 },
  { x: '38%', y: '12%', size: 2, delay: 1.5, duration: 6.0 },
  { x: '28%', y: '85%', size: 3, delay: 0.3, duration: 4.6 },
  { x: '48%', y: '55%', size: 2, delay: 2.1, duration: 5.4 },
  { x: '10%', y: '45%', size: 2, delay: 1.2, duration: 3.9 },
]

export default function HeroSection({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const photoPanelRef = useRef<HTMLDivElement>(null)

  const ambientRef = useRef<HTMLDivElement>(null)
  const photoImageRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const prefersReducedMotion = useReducedMotion()

  // --- Cursor Glow ---
  const rawX = useMotionValue(30)
  const rawY = useMotionValue(50)
  const glowX = useSpring(rawX, { stiffness: 50, damping: 22 })
  const glowY = useSpring(rawY, { stiffness: 50, damping: 22 })

  const glowBg = useMotionTemplate`radial-gradient(700px circle at ${glowX}% ${glowY}%, color-mix(in srgb, var(--blue-500) 10%, transparent), transparent)`

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    rawX.set(((e.clientX - rect.left) / rect.width) * 100)
    rawY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  // --- GSAP ---
  useLayoutEffect(() => {
    if (prefersReducedMotion) return () => {}

    ensureGsapPlugins()

    const section = sectionRef.current
    if (!section) return () => {}

    // Guard: All entrance refs must be present
    const entranceTargets = [
      // Left Side
      tagRef.current,
      headingRef.current,
      taglineRef.current,
      ctasRef.current,
      statsRef.current,
      // TODO: Right Side
    ]

    if (entranceTargets.some((el) => !el)) return () => {}

    const ctx = gsap.context(() => {
      // Entrance Animation. Runs on mount
      gsap.set(
        [
          tagRef.current,
          headingRef.current,
          taglineRef.current,
          ctasRef.current,
        ],
        { opacity: 0, y: 32, willChange: 'transform, opacity' },
      )
      gsap.set(statsRef.current, {
        opacity: 0,
        y: 20,
        willChange: 'transform, opacity',
      })
      // TODO: Right Side

      const entrance = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.08,
      })

      entrance
        // Left side
        .to(tagRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.18)
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.3)
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.45)
        .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.56)
        .to(statsRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.68)
    }, section)

    return () => {
      ctx.revert()
    }
  }, [prefersReducedMotion])

  return (
    <section
      ref={sectionRef}
      className={cn(
        'bg-canvas relative flex flex-col overflow-hidden',
        className,
      )}
      aria-labelledby='hero-heading'
      onMouseMove={handleMouseMove}
    >
      {/* Static Ambient Gradient */}
      <div
        ref={ambientRef}
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, color-mix(in srgb, var(--blue-050) 90%, transparent), transparent)',
        }}
      />
      {/* Glow Cursor */}
      <motion.div
        className='pointer-events-none absolute inset-0'
        style={{ background: glowBg }}
      />
      {/* Left Side: Floating Particles */}
      <div
        className='pointer-events-none absolute inset-y-0 left-0 w-1/2 overflow-hidden'
        aria-hidden
      >
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className='bg-blue-500 absolute rounded-full'
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [-15, 15, -15], opacity: [0.15, 0.35, 0.15] }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      {/* Two-Column Grid */}
      <div className='relative z-10 grid min-h-[calc(100vh-52px)] grid-cols-1 lg:grid-cols-2'>
        {/* Left - Text Content */}
        <div
          ref={contentRef}
          className='flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-20'
        >
          {/* 
            Each block gets own ref for staggered timing.
          */}
          <div ref={tagRef}>
            <HeroTag />
          </div>
          <div ref={headingRef}>
            <HeroHeading name={site.name} />
          </div>
          <div ref={taglineRef}>
            <HeroTagline tagline={site.tagline} />
          </div>
          <div ref={ctasRef} className='mt-9'>
            <HeroCtas />
          </div>
          <div ref={statsRef} className='mt-8'>
            <HeroStats
              stats={site.stats.map((s) => ({
                ...s,
                suffix: s.suffix || undefined,
              }))}
            />
          </div>
        </div>

        {/* Right - Dark Photo Panel (Desktop ONLY) */}
        <div
          ref={photoPanelRef}
          className='relative overflow-hidden hidden lg:block'
        >
          {/* Angled Background */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'linear-gradient(160deg, var(--blue-800) 0%, var(--canvas-dark) 65%)',
              clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          />

          <motion.div ref={photoImageRef} className='absolute inset-0'>
            {/* <HeroPhoto /> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
