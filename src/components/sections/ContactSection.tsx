'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/config/animations'

import { cn } from '@/lib/utils'
import SectionEyebrow from '@/src/components/ui/SectionEyebrow'
import SectionHeading from '@/src/components/ui/SectionHeading'

export default function ContactSection({ className }: { className?: string }) {
  return (
    <section id='contact' className={cn('bg-canvas-sunken py-24', className)}>
      <div className='container mx-auto px-4'>
        <motion.div
          className='mb-12 flex flex-col gap-4'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className='text-n400 font-mono text-[0.65rem] tracking-[0.12em]'>
            // 05_contact
          </span>
          <SectionEyebrow number='05'>Contact</SectionEyebrow>
          <SectionHeading className='font-bold text-4xl md:text-5xl'>
            Got something to build?
          </SectionHeading>
          This is the Contact section.
        </motion.div>
      </div>
    </section>
  )
}
