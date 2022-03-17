import { Link } from '@shared'

interface NavbarProps {
  className?: string
}

interface NavItem {
  title: string
  link: string
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Work',
    link: '/work',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
]

export const Navbar = ({ className = '' }: NavbarProps) => (
  <nav className={`container mx-auto mt-6 ${className}`}>
    {
      navItems.map(({ title, link }, index) => (
        <Link
          to={link}
          // since the list of icons is static and won't be modified, it's fine
          // to use array index as key
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className='mr-7 text-lg text-neutral-500 hover:text-neutral-600'
          activeClass='text-green-500 hover:text-green-600'
        >
          {title}
        </Link>
      ))
    }
  </nav>
)