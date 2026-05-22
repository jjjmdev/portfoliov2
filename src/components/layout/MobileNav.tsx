import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { site } from '@/lib/data/site'
import { cn } from '@/lib/utils'

export default function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='bg-canvas-dark/60 fixed inset-0 z-40 backdrop-blur-sm'
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className='bg-canvas fixed top-0 right-0 z-50 flex h-full w-80 flex-col px-8 pt-4 pb-8 shadow-(--sh-xl)'
          >
            <button
              onClick={onClose}
              aria-label='Close menu'
              className='text-n500 hover:text-n900 transition-colors mb-10 ml-auto flex w-9 h-9 items-center justify-center cursor-pointer rounded-sm'
            >
              <X size={20} />
            </button>

            <nav className='flex flex-col gap-6'>
              {site.nav.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={cn(
                    'font-display text-2xl font-bold transition-colors duration-200 text-n800 hover:text-blue-500',
                    // TODO: handling of hash link
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className='mt-auto space-y-4'>
              <a className='bg-blue-500 hover:bg-blue-400 font-display flex w-full items-center justify-center rounded-sm px-6 py-3 font-semibold text-white shadow-(--sh-blue) transition-all'>
                Download CV
              </a>
              <p className='text-n400 text-center font-mono text-xs'>
                {site.location}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
