import { FunctionComponent, SVGProps } from 'react'

import { ReactComponent as Twitter } from '@/assets/twitter.svg'
import { ReactComponent as Facebook } from '@/assets/facebook.svg'
import { ReactComponent as RSS } from '@/assets/rss.svg'
import { ReactComponent as Pinterest } from '@/assets/pinterest.svg'
import { ReactComponent as GooglePlus } from '@/assets/google-plus.svg'
import { ReactComponent as Dribbble } from '@/assets/dribbble.svg'

import { Logo } from '../Logo'

interface IconItem {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  url: string
  hoverClass: string
}

const icons: IconItem[] = [
  {
    icon: Twitter,
    url: 'https://twitter.com/',
    hoverClass: 'hover:fill-[#00B9F7]',
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/',
    hoverClass: 'hover:fill-[#1877F2]',
  },
  {
    icon: RSS,
    url: 'https://rss.com/',
    hoverClass: 'hover:fill-[#F89903]',
  },
  {
    icon: Pinterest,
    url: 'https://www.pinterest.com/',
    hoverClass: 'hover:fill-[#E60023]',
  },
  {
    icon: GooglePlus,
    url: 'https://plus.google.com/',
    hoverClass: 'hover:fill-[#DD4F43]',
  },
  {
    icon: Dribbble,
    url: 'https://dribbble.com/',
    hoverClass: 'hover:fill-[#ea4c89]',
  },
]

export const Header = () => (
  <header className='container mx-auto grid grid-cols-2 items-center mt-6 border-b pb-6'>
    <Logo className='col-span-2 md:col-span-1' />
    {/* <img className='col-span-2 md:col-span-1' src='/logo.svg' alt='Display Logo' /> */}
    <div className='flex justify-end col-span-2 md:col-span-1 mt-4 md:mt-0'>
      {
          icons.map(({ icon: Icon, url, hoverClass }, index) => (
            // links are hardcoded and are referring to safe websites, so not adding
            // a rel attr won't come with a security risk
            // eslint-disable-next-line react/jsx-no-target-blank
            <a
              href={url}
              // since the list of icons is static and won't be modified, it's fine
              // to use array index as key
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              target='_blank'
            >
              <Icon
                className={`ml-[8.5px] fill-gray-300 ${hoverClass}`}
                width='33.45px'
                height='33.74px'
              />
            </a>
          ))
        }
    </div>
  </header>
)
