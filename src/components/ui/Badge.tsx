import { cn } from '@/lib/utils'

export default function Badge({
  variant = 'neutral',
  children,
  className,
}: {
  variant?: 'neutral' | 'blue' | 'teal' | 'dark'
  children: React.ReactNode
  className?: string
}) {
  const variants = {
    neutral: 'bg-n100 text-n700 border border-n200',
    blue: 'bg-blue-100 text-blue-700 border border-blue-200',
    teal: 'bg-teal-100 text-teal-700 border border-teal-200',
    dark: 'bg-n800 text-n200 border border-n700',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xs px-2.5 py-0.5 font-mono text-[0.68rem] font-medium tracking-wide',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
