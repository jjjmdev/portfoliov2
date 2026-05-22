'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/config/animations'

import { cn } from '@/lib/utils'
import SectionEyebrow from '@/src/components/ui/SectionEyebrow'
import SectionHeading from '@/src/components/ui/SectionHeading'

export default function SkillsSection({ className }: { className?: string }) {
  return (
    <section id='skills' className={cn('py-24', className)}>
      <div className='container mx-auto px-4'>
        <motion.div
          className='mb-12 flex flex-col gap-4'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className='text-n400 font-mono text-[0.65rem] tracking-[0.12em]'>
            // 04_tech_stack
          </span>
          <SectionEyebrow number='04'>Tech Stack</SectionEyebrow>
          <SectionHeading accent='tools'>The tools I reach for.</SectionHeading>
          This is the Skills section.
        </motion.div>
      </div>
    </section>
  )
}
