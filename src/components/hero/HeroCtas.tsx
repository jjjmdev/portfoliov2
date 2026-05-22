import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/config/animations'

export default function HeroCtas({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn('flex flex-wrap items-center gap-3.5', className)}
      variants={staggerContainer}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={staggerItem}>
        <Link
          href='/#projects'
          className='font-display bg-linear-to-br from-blue-700 to-blue-500 inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-[0.82rem] font-bold tracking-[0.07em] text-white uppercase shadow-(--sh-blue) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(22,0,217,0.45)]'
        >
          View My Work ↓
        </Link>
      </motion.div>
      <motion.div variants={staggerItem}>
        <Link
          href='/contact'
          className='font-display border border-n300 text-n700 hover:border-blue-400 hover:text-blue-600 inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-[0.82rem] font-semibold tracking-[0.04em] transition-all duration-200'
        >
          Get In Touch
        </Link>
      </motion.div>
    </motion.div>
  )
}
