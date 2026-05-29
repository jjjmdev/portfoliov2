interface Project {
  slug: string
  title: string
  shortDesc: string
  problem: string
  decision: string
  result: string
  role: string
  company?: string
  stack: string[]
  category: ('fullstack' | 'frontend' | 'ai' | 'mobile')[]
  featured: boolean
  liveUrl?: string
  codeUrl?: string
  thumbnail: string
  heroImage: string
  screens: string[]
  date: string
  duration?: string
}

export const projects: Project[] = [
  {
    slug: 'hati-tayo',
    title: 'Hati Tayo',
    shortDesc:
      'Nullam convallis feugiat neque in sollicitudin. Sed finibus ligula quis nunc volutpat blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    problem:
      'In fermentum malesuada tellus vitae fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    decision:
      'Pellentesque eros odio, blandit quis mauris non, eleifend posuere nisl. Suspendisse enim dolor, auctor consectetur eros in, fermentum semper erat.',
    result:
      'Vivamus ut sem at est vulputate sagittis. Quisque eu laoreet lectus, nec tincidunt ex.',
    role: 'Full Stack Engineer',
    stack: ['React', 'MongoDB', 'Express', 'Framer Motion'],
    category: ['fullstack'],
    featured: true,
    liveUrl: 'https://hati-tayo.up.railway.app/',
    codeUrl: 'https://github.com/jjjmdev/hati-tayo',
    thumbnail: '/images/hati-tayo/cover.png',
    heroImage: '/images/hati-tayo/cover.png',
    screens: ['/images/hati-tayo/cover.png'],
    date: '2026-03',
    duration: '1 month',
  },
  {
    slug: 'hati-tayoooo',
    title: 'Hati Tayo',
    shortDesc:
      'Nullam convallis feugiat neque in sollicitudin. Sed finibus ligula quis nunc volutpat blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    problem:
      'In fermentum malesuada tellus vitae fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    decision:
      'Pellentesque eros odio, blandit quis mauris non, eleifend posuere nisl. Suspendisse enim dolor, auctor consectetur eros in, fermentum semper erat.',
    result:
      'Vivamus ut sem at est vulputate sagittis. Quisque eu laoreet lectus, nec tincidunt ex.',
    role: 'Full Stack Engineer',
    stack: ['React', 'MongoDB', 'Express', 'Framer Motion'],
    category: ['fullstack'],
    featured: true,
    liveUrl: 'https://hati-tayo.up.railway.app/',
    codeUrl: 'https://github.com/jjjmdev/hati-tayo',
    thumbnail: '/images/hati-tayo/cover.png',
    heroImage: '/images/hati-tayo/cover.png',
    screens: ['/images/hati-tayo/cover.png'],
    date: '2026-03',
    duration: '1 month',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
