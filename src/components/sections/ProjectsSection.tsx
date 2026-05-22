'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/config/animations'

import { cn } from '@/lib/utils'
import SectionEyebrow from '@/src/components/ui/SectionEyebrow'
import SectionHeading from '@/src/components/ui/SectionHeading'

export default function ProjectsSection({ className }: { className?: string }) {
  return (
    <section id='projects' className={cn('py-24', className)}>
      <div className='container mx-auto px-4'>
        <motion.div
          className='mb-12 flex flex-col gap-4'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className='text-n400 font-mono text-[0.65rem] tracking-[0.12em]'>
            // 02_projects
          </span>
          <SectionEyebrow number='02'>Projects</SectionEyebrow>
          <SectionHeading accent='What'>What I've built.</SectionHeading>
          This is the Projects section.
        </motion.div>
      </div>
    </section>
  )
}
