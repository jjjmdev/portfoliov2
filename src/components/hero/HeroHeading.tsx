import useTypewriter from '@/src/hooks/use-typewriter'
import { motion } from 'framer-motion'

const ROLES = ['Full Stack Engineer', 'MERN Developer'] as const

export default function HeroHeading({ name }: { name: string }) {
  const parts = name.split(' ')
  const solid = parts.slice(0, -1).join(' ')
  const outline = parts[parts.length - 1] + '.'
  const { display, blink } = useTypewriter(ROLES)

  return (
    <>
      <h1 id='hero-heading' className='mb-4'>
        <span className='font-display text-n900 block text-[clamp(2.8rem,5vw,4.2rem)] leading-[0.95] font-extrabold tracking-[0.04em]'>
          {solid}
        </span>
        <span
          className='font-display text-n900 block text-[clamp(2.8rem,5vw,4.2rem)] leading-[0.95] font-extrabold tracking-[0.04em]'
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px var(--blue-500',
          }}
        >
          {outline}
        </span>
        <span className='sr-only'>
          Full Stack Developer from Manila, Philippines
        </span>
      </h1>
      <div
        className='text-n500 mb-4 flex h-5 items-center font-mono text-[0.82rem] tracking-[0.03em]'
        aria-live='polite'
        aria-atomic='true'
      >
        {display}
        <motion.span
          aria-hidden
          className='bg-blue-500 ml-0.5 inline-block h-[1em] w-0.5'
          animate={{ opacity: blink ? 1 : 0 }}
        />
      </div>
    </>
  )
}
