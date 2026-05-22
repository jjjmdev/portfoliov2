'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/config/animations'

import { cn } from '@/lib/utils'
import SectionEyebrow from '@/src/components/ui/SectionEyebrow'

export default function ExperienceSection({
  className,
}: {
  className?: string
}) {
  return (
    <section
      id='experience'
      className={cn('bg-canvas-sunken py-24', className)}
    >
      <div className='container mx-auto px-4'>
        <motion.div
          className='mb-12 flex flex-col gap-4'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className='text-n400 font-mono text-[0.65rem] tracking-[0.12em]'>
            // 03_career
          </span>
          <SectionEyebrow number='03'>Career</SectionEyebrow>
          This is the experience section.
        </motion.div>
      </div>
    </section>
  )
}
