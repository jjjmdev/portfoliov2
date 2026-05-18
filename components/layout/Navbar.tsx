'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { site } from '@/lib/data/site'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import NavLink from './NavLink'
import MobileNav from './MobileNav'
import AvailabilityChip from '../ui/AvailabilityChip'

export default function Navbar({ className }: { className: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)

      if (y < 60) {
        setVisible(true)
      } else {
        setVisible(y < lastScrollY.current)
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled
            ? 'rgba(238, 242, 245, 0.92)'
            : 'rgba(238, 242, 245, 0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          y: visible ? 0 : -80,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-30 border-b border-transparent transition-[border-color] duration-300',
          scrolled && 'border-n200',
          className,
        )}
      >
        <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
          {/* Left Side */}
          <div className='flex items-center gap-2'>
            <Link
              href='/'
              className='text-n900 hover:text-blue-500 font-mono text-sm font-medium transition-colors'
            >
              &lt;<span className='text-blue-500'>jjjm.dev</span> /&gt;
            </Link>
          </div>

          {/* Center */}
          <nav className='hidden md:flex items-center gap-7'>
            {site.nav
              .filter((n) => n.label !== 'Home')
              .map(({ label, href }) => (
                <NavLink key={label} href={href}>
                  {label}
                </NavLink>
              ))}
          </nav>

          {/* Right Side */}
          <div className='hidden md:flex items-center gap-4'>
            <AvailabilityChip status={site.availability} />
            <a
              href='/docs/john-joshua-mamawag-cv.pdf'
              download='John_Joshua_Mamawag_CV.pdf'
              className='bg-n900 hover:bg-blue-600 font-display rounded-sm px-4 py-2 text-sm font-semibold text-white shadow-(--sh-sm) transition-all duration-200 hover:shadow-(--sh-blue)'
            >
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
            className='flex md:hidden h-9 w-9 items-center justify-center text-n600 cursor-pointer rounded-sm'
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
