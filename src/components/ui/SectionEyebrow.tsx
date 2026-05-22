import { cn } from '@/lib/utils'

export default function SectionEyebrow({
  children,
  number,
  className,
}: {
  children: React.ReactNode
  number?: string
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className='bg-blue-500 h-px w-8 shrink-0' />
      {number && (
        <span className='text-blue-500 font-mono text-[0.65rem] font-mediun tracking-[0.2em]'>
          {number}
        </span>
      )}
      <span className='text-n400 font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase'>
        {children}
      </span>
    </div>
  )
}
