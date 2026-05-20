import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { fadeIn } from '@/config/animations'
import { Fragment } from 'react'

export default function HeroStats({
  stats,
  className,
}: {
  // TODO: Stats Card Props (exported later)
  stats: readonly {
    value: number
    suffix?: string
    label: string
    className?: string
  }[]
  className?: string
}) {
  return (
    <motion.div
      className={cn(
        'text-n400 flex flex-wrap items-center gap-7 font-mono text-[0.7rem] tracking-[0.04em]',
        className,
      )}
      variants={fadeIn}
      initial='hidden'
      animate='show'
    >
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && (
            <span
              aria-hidden
              className='bg-n300 h-[3px] w-[3px] rounded-full'
            />
          )}
          <div>
            <span
              className='text-blue-500 font-medium'
              data-stat-target={String(stat.value)}
              data-stat-suffix={stat.suffix ?? ''}
            >
              {stat.value}
              {stat.suffix}
            </span>{' '}
            {stat.label.toLowerCase()}
          </div>
        </Fragment>
      ))}
    </motion.div>
  )
}
