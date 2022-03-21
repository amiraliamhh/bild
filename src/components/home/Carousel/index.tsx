import {
  KeyboardEvent,
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react'

import { WorkItem } from '@/components/work/Works/View'
import { useFetch, useInterval } from '@/hooks'
import { ReactComponent as LinkIcon } from '@/assets/link.svg'
import { ReactComponent as Chevron } from '@/assets/chevron-right.svg'

import './Carousel.scss'

interface CarouselProps {
  className?: string
}

const limit = 7

export const Carousel = ({ className = '' }: CarouselProps) => {
  const carousel = useRef<HTMLDivElement>(null)
  const screenWidth = useMemo(() => window.innerWidth, [])
  const [selected, setSelected] = useState(3)
  const slideShowDirection = useRef<string|null>('right')

  const { response, fetch } = useFetch<WorkItem[]>({
    url: '/works',
    params: {
      _limit: limit,
    },
    defaultResponse: [],
  })

  const moveRight = useCallback(() => {
    setSelected((prev) => {
      if (prev <= (response?.length || limit)) {
        return prev + 1
      }
      return prev
    })
  }, [])

  const moveLeft = useCallback(() => {
    setSelected((prev) => {
      if (prev > 0) {
        return prev - 1
      }
      return prev
    })
  }, [])

  // Slideshow
  const { clear } = useInterval(() => {
    if (slideShowDirection.current === 'right') {
      if (selected < (response?.length || limit) - 1) {
        moveRight()
      } else {
        slideShowDirection.current = 'left'
        moveLeft()
      }
    } else if (selected !== 0) {
      moveLeft()
    } else {
      slideShowDirection.current = 'right'
      moveRight()
    }
  }, 3e3)

  const move = (dir: 'right'|'left') => {
    clear()
    if (dir === 'left') {
      moveLeft()
    } else {
      moveRight()
    }
  }

  const itemKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'ArrowRight') move('right')
    if (e.code === 'ArrowLeft') move('left')
  }

  const selectByFocus = (index: number) => {
    clear()
    setSelected(index)
  }

  useEffect(() => {
    fetch({})
  }, [fetch])

  useEffect(() => {
    // it's a readonly operation and element won't be manipulated, so it's fine to use
    // document.querySelector instead of react ref
    const selectedEl = document.querySelector(`[data-index=item-${selected}]`) as HTMLDivElement
    carousel.current?.scrollTo({
      left: (selectedEl?.offsetLeft || 0) - (screenWidth - 300) / 2,
      behavior: 'smooth',
    })
  }, [selected, response])

  return (
    <>
      <section ref={carousel} className={`flex overflow-hidden w-full px-[50vw] ${className}`}>
        {
        response?.map(({ id, title, image }, index) => (
          <div
            key={id}
            className={`min-w-[300px] h-[200px] mx-[10px] relative ${index !== selected ? 'opacity-50' : 'selected'}`}
            onClick={() => { setSelected(index) }}
            onKeyUp={itemKeyUp}
            tabIndex={0}
            onFocus={() => { selectByFocus(index) }}
            role='link'
            data-index={`item-${index}`}
          >
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
        <div className='col-span-12 md:col-span-8 md:col-start-3 flex items-center'>
          <button aria-label='move-left' className='cursor-pointer' onClick={() => { move('left') }} disabled={selected === 0}>
            <Chevron className={`min-w-[21px] h-[31px] rotate-180 ${selected === 0 ? 'fill-[#EFEFEF]' : 'fill-green-500 hover:fill-green-600'}`} />
          </button>
          <div className='px-10'>
            <p className='text-lg text-center text-zinc-500 font-semibold'>{response?.[selected]?.title}</p>
            <p className='text-center text-sm text-zinc-500 leading-[1.375rem] mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit
              justo, faucibus eu sagittis ac, gravida quis tortor.
            </p>
          </div>
          <button aria-label='move-right' className='cursor-pointer' onClick={() => { move('right') }} disabled={selected === (response?.length || limit) - 1}>
            <Chevron className={`min-w-[21px] h-[31px] ${selected < (response?.length || limit) - 1 ? 'fill-green-500 hover:fill-green-600' : 'fill-[#EFEFEF]'}`} />
          </button>
        </div>
      </div>
    </>
  )
}
