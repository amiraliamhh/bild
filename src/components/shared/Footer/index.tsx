import { Fragment } from 'react'
import { Link } from '@shared'

import { navItems } from '@/components/shared/Navbar'

export const Footer = () => (
  <footer className='bg-neutral-200 py-5'>
    <div className='container mx-auto grid grid-cols-2'>
      <small className='text-xs text-zinc-400 col-span-1 self-center'>COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED.</small>
      <div className='self-center justify-self-end'>
        {
          navItems.map(({ title, link }, index) => (
            // since the list of icons is static and won't be modified, it's fine
            // to use array index as key
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              <Link
                to={link}
                className='text-xs text-zinc-400 hover:text-zinc-500'
                activeClass='!text-green-500 hover:!text-green-600'
              >
                {title}
              </Link>
              {index !== navItems.length - 1 && <span className='text-xs text-zinc-400'>&nbsp;&nbsp;/&nbsp;&nbsp;</span>}
            </Fragment>
          ))
        }
      </div>
    </div>
  </footer>
)
