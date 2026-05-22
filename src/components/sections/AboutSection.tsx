'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '@/config/animations'

import { cn } from '@/lib/utils'
import SectionEyebrow from '@/src/components/ui/SectionEyebrow'
import SectionHeading from '@/src/components/ui/SectionHeading'

const HIGHLIGHTS = [
  { label: 'Stack', value: 'MERN • Next.js • TypeScript' },
  { label: 'Focus', value: 'Full-stack' },
  { label: 'Status', value: '▹ Open to collaboration' },
]

export default function AboutSection({ className }: { className?: string }) {
  return (
    <section id='about' className={cn('bg-canvas-sunken py-24', className)}>
      <div className='container mx-auto px-4'>
        <motion.div
          className='mb-12 flex flex-col gap-4'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className='text-n400 font-mono text-[0.65rem] tracking-[0.12em]'>
            // 01_about
          </span>
          <SectionEyebrow number='01'>About</SectionEyebrow>
          <SectionHeading accent='build'>
            I design, build, and ship.
          </SectionHeading>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Bio */}
          <motion.div variants={staggerItem} className='flex flex-col gap-5'>
            <p className='text-n600 text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, voluptate sed officiis sit corrupti deleniti magnam
              harum ut dignissimos totam.
            </p>
            <p className='text-n500 text-base leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              dolorem repellat.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={staggerItem} className='flex flex-col gap-3'>
            {HIGHLIGHTS.map(({ label, value }) => (
              <div
                key={label}
                className='border-n200 bg-canvas-raised flex items-center gap-4 rounded-sm border px-5 py-4'
              >
                <span className='text-blue-500 shrink 0 font-mono text-[0.65rem] tracking-[0.15em] uppercase'>
                  {label}
                </span>
                <span className='bg-n200 h-3 w-px shrink-0' />
                <span className='text-n700 font-mono text-sm'>{value}</span>
              </div>
            ))}

            <div
              className='mt-2 rounded-sm px-5 py-4 font-mono text-sm
              bg-[color-mix(in_srgb,var(--blue-500)_6%,var(--canvas-raised))]
              border border-solid border-[color-mix(in_srgb,var(--blue-500)_18%,transparent)]'
            >
              <span className='text-n400'>$ cat availability.txt</span>
              <br />
              <div className='text-blue-500'>✓ Open to opportunities</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
