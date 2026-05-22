export const site = {
  name: 'Joshua Mamawag',
  title: 'Full Stack Engineer • MERN • Next.js • TailwindCSS',
  tagline:
    'Transforming applications with innovative technologies. MERN • Next.js',
  email: 'jjjmdev@gmail.com',
  location: 'Manila, Philippines',
  availability: 'available',
  url: 'jjjmdev.vercel.app',
  socials: {
    github: 'http://github.com/jjjmdev',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ],
  stats: [{ value: 2, suffix: '+', label: 'Projects Shipped' }],
} as const
