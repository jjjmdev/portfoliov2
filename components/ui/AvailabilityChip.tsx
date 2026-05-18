import { cn } from '@/lib/utils'
import PulseDot from './PulseDot'

const statusConfig = {
  available: {
    label: 'Available for hire',
    color: 'yellow',
  },
  busy: {
    label: 'Currently engaged',
    color: 'blue',
  },
  open: {
    label: 'Open to opportunities',
    color: 'yellow',
  },
}

export default function AvailabilityChip({
  status = 'available',
  className,
}: {
  status?: 'available' | 'busy' | 'open'
  className?: string
}) {
  const { label, color } = statusConfig[status]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs',
        color === 'yellow'
          ? 'border-yellow-200 bg-yellow-100 text-yellow-700'
          : 'border-blue-200 bg-blue-100 text-blue-700',
      )}
    >
      <PulseDot color={color as 'yellow' | 'blue'} />
      {label}
    </span>
  )
}
