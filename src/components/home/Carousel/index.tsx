import {
  useEffect, useMemo, useRef, useState,
} from 'react'

import { WorkItem } from '@/components/work/Works/View'
import { useFetch } from '@/hooks'
import { ReactComponent as LinkIcon } from '@/assets/link.svg'
import { ReactComponent as Chevron } from '@/assets/chevron-right.svg'

import './Carousel.scss'

interface CarouselProps {
  className?: string
}

export const Carousel = ({ className = '' }: CarouselProps) => {
  const carousel = useRef<HTMLDivElement>(null)
  const screenWidth = useMemo(() => window.innerWidth, [])
  const [selected, setSelected] = useState(3)

  const { response, fetch } = useFetch<WorkItem[]>({
    url: '/works',
    params: {
      _limit: 7,
    },
    defaultResponse: [],
  })

  useEffect(() => {
    fetch({})
  }, [fetch])

  useEffect(() => {
    carousel.current?.scrollTo({
      left: (screenWidth / 2) - 300,
      behavior: 'smooth',
    })
  }, [selected])

  return (
    <>
      <section ref={carousel} className={`flex overflow-hidden w-full ${className}`}>
        {
        response?.map(({ id, title, image }, index) => (
          <div key={id} className={`min-w-[300px] h-[200px] mx-[10px] relative ${index !== selected ? 'opacity-50' : 'selected'}`}>
            <img className='w-full h-full' src={`${import.meta.env.VITE_API_BASE}${image}`} width={300} height={200} alt={title} />
            <a className='absolute inset-0 m-auto justify-center items-center hidden' href='http://example.com/' target='_blank' rel='noreferrer'>
              <button className='w-[97px] h-[97px] bg-green-500 hover:bg-green-600 rounded-full flex justify-center items-center'>
                <LinkIcon width='32px' height='42px' />
              </button>
            </a>
          </div>
        ))
      }
      </section>
      <div className='container grid grid-cols-12 gap-4 mt-10'>
        <div className='col-span-8 col-start-3 flex items-center'>
          <Chevron className='min-w-[21px] h-[31px] rotate-180 fill-[#EFEFEF]' />
          <div className='px-10'>
            <p className='text-lg text-center text-zinc-500 font-semibold'>{response?.[selected]?.title}</p>
            <p className='text-center text-sm text-zinc-500 leading-[1.375rem] mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit
              justo, faucibus eu sagittis ac, gravida quis tortor.
            </p>
          </div>
          <Chevron className='min-w-[21px] h-[31px] fill-green-500 hover:fill-green-600' />
        </div>
      </div>
    </>
  )
}
