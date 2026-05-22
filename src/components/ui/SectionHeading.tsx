import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  children: React.ReactNode
  accent?: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export default function SectionHeading({
  children,
  accent,
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  if (!accent) {
    return (
      <Tag
        className={cn(
          'font-display text-n900 text-3xl font-extrabold tracking-tight md:text-4xl',
          className,
        )}
      >
        {children}
      </Tag>
    )
  }

  const text = typeof children === 'string' ? children : ''
  const parts = text.split(accent)

  return (
    <Tag
      className={cn(
        'font-display text-n900 text-3xl font-extrabold tracking-tight md:text-4xl',
        className,
      )}
    >
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className='text-blue-500'>{accent}</span>
          )}
        </span>
      ))}
    </Tag>
  )
}
