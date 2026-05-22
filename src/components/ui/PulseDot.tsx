import { cn } from '@/lib/utils'

export default function PulseDot({
  color = 'yellow',
  className,
}: {
  color?: 'yellow' | 'blue'
  className?: string
}) {
  return (
    <span
      aria-hidden='true'
      className={cn('relative inline-flex h-2 w-2', className)}
    >
      <span
        className={cn(
          'absolute inline-flex h-full w-full rounded-full animate-ping opacity-75',
          color === 'yellow' ? 'bg-yellow-400' : 'bg-blue-400',
        )}
      />
      <span
        className={cn(
          'relative inline-flex h-2 w-2 rounded-full',
          color === 'yellow' ? 'bg-yellow-500' : 'bg-blue-500',
        )}
      />
    </span>
  )
}
