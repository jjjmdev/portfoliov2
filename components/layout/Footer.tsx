import { SiGithub } from '@icons-pack/react-simple-icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { site } from '@/lib/data/site'

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      id='footer'
      className={cn('border-n200 bg-canvas border-t', className)}
    >
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row'>
        {/* Logo */}
        <Link
          href='/'
          className='text-n500 hover:text-blue-500 font-mono text-sm transition-colors'
        >
          &lt;<span className='text-blue-500'>jjjm.dev</span> /&gt;
        </Link>

        {/* Nav links */}
        <nav className='flex flex-wrap justify-center gap-5'>
          {site.nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className='font-display text-n500 hover:text-n900 text-xs transition-colors'
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social + copyright */}
        <div className='flex items-center gap-4'>
          <a
            href={site.socials.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-n400 hover:text-n900 transition-colors'
          >
            <SiGithub size={16} />
          </a>
          <span className='text-n400 font-mono text-xs'>
            © {new Date().getFullYear()} Joshua Mamawag
          </span>
        </div>
      </div>
    </footer>
  )
}
