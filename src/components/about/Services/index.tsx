import {
  FunctionComponent, SVGProps, useEffect, useState,
} from 'react'

import { ReactComponent as Websites } from '@/assets/websites.svg'
import { ReactComponent as Camera } from '@/assets/camera.svg'
import { ReactComponent as Seo } from '@/assets/seo.svg'
import { ReactComponent as Apps } from '@/assets/apps.svg'

import './Services.scss'
import { TabContent } from './TabContent'

interface ServicesProps {
  className?: string
}

interface TabItem {
  title: string
  contentIndices: number[]
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  iconWidth: string
  iconHeight: string
  id: string
}

const tabItems: TabItem[] = [
  {
    title: 'Websites',
    contentIndices: [0, 1, 2],
    icon: Websites,
    iconWidth: '3.125rem',
    iconHeight: '3.625rem',
    id: 'websites',
  },
  {
    title: 'Photography',
    contentIndices: [3, 2, 1],
    icon: Camera,
    iconWidth: '3.125rem',
    iconHeight: '2.625rem',
    id: 'photography',
  },
  {
    title: 'SEO',
    contentIndices: [1, 2, 3],
    icon: Seo,
    iconWidth: '3.125rem',
    iconHeight: '2.875rem',
    id: 'seo',
  },
  {
    title: 'Applications',
    contentIndices: [3, 1, 0],
    icon: Apps,
    iconWidth: '3.125rem',
    iconHeight: '2.6875rem',
    id: 'applications',
  },
]

export const Services = ({ className = '' }: ServicesProps) => {
  const [activeTab, setActiveTab] = useState(tabItems[0].id)

  useEffect(() => {
    const changeTab = () => {
      setActiveTab(window.location.hash.replace('#', ''))
    }

    window.addEventListener('hashchange', changeTab)

    return () => {
      window.removeEventListener('hashchange', changeTab)
    }
  }, [])

  return (
    <section className={`${className} mt-9`}>
      <div className='container mx-auto'>
        <h3 className='text-2xl text-zinc-500 font-semibold'>Services</h3>
      </div>
      <div className='mt-5 w-full bg-neutral-200'>
        <nav className='md:container md:mx-auto grid grid-cols-4'>
          {
            tabItems.map(({
              title, icon: Icon, iconHeight, iconWidth, id,
            }) => (
              <a className={`col-span-1 py-6 sm:py-10 flex flex-col items-center cursor-pointer hover:bg-neutral-300 ${activeTab === id ? 'bg-gray-300' : ''}`} key={id} href={`#${id}`}>
                <div className='flex items-end w-10 h-10'>
                  <Icon className='fill-neutral-500' width={iconWidth} height={iconHeight} />
                </div>
                <span className='hidden sm:block mt-5 text-lg font-semibold text-neutral-500 uppercase'>{title}</span>
              </a>
            ))
          }
        </nav>
      </div>
      <section className='container mx-auto mt-5'>
        {
          tabItems.map(({ id, contentIndices }) => (
            <TabContent
              activeTab={activeTab}
              id={id}
              indices={contentIndices}
              key={id}
            />
          ))
        }
      </section>
    </section>
  )
}
