import {
  useCallback,
  useContext, useEffect, useRef,
} from 'react'

import { useFetch } from '@/hooks'
import { ReactComponent as LinkIcon } from '@/assets/link.svg'

import { NoResult } from './NoResult'
import { FilterContext } from './index'
import './View.scss'

interface WorksViewProps {
  className?: string
}

interface WorkItem {
  id: number
  title: string
  image: string
  category: string
}

export const WorksView = ({ className = '' }: WorksViewProps) => {
  const currentPage = useRef(0)
  const fetchNext = useRef(true)
  const observer = useRef<IntersectionObserver>()
  const { category } = useContext(FilterContext)

  const {
    fetch, response, loading, reset,
  } = useFetch<WorkItem[]>({
    url: '/works',
    params: {
      _limit: 9,
    },
    defaultResponse: [],
    responseModifier(res: WorkItem[], prev: WorkItem[]) {
      if (res.length < 9) {
        fetchNext.current = false
      }
      return [...prev, ...res]
    },
  })

  useEffect(() => {
    fetchNext.current = true
    currentPage.current = 1
    reset()
    fetch({
      ...(category && category !== 'all' ? { category } : {}),
    })
  }, [category])

  const lastWorkElement = useCallback((node) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fetchNext.current) {
        currentPage.current += 1
        fetch({
          _page: currentPage.current,
          ...(category && category !== 'all' ? { category } : {}),
        })
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })
    if (node) observer.current.observe(node)
  }, [loading, fetchNext])

  return (
    <>
      <section className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {
        response?.length
          ? response?.map(({ id, image, title }, index) => (
            <div
              key={id}
              className='work-item w-full md:h-[300px] lg:h-[220px] bg-slate-100 relative'
              {...(index === response.length - 1 ? { ref: lastWorkElement } : {})}
            >
              <img className='w-full h-full' src={`${import.meta.env.VITE_API_BASE}${image}`} alt={title} width='300' height='220' />
              <a className='absolute inset-0 m-auto justify-center items-center hidden' href='http://example.com/' target='_blank' rel='noreferrer'>
                <button className='w-[97px] h-[97px] bg-green-500 hover:bg-green-600 rounded-full flex justify-center items-center'>
                  <LinkIcon width='32px' height='42px' />
                </button>
              </a>
            </div>
          ))
          : !loading && <NoResult />
      }
      </section>
      <div className='h-10 w-full flex items-center'>
        {
      loading
      && (
      <div className='flex items-center my-4'>
        <div className='inline-block w-6 h-6 mr-4 animate-spin border-l-2 border-b-2 border-green-500 rounded-full' />
        {' '}
        <span className='text-zinc-500 font-semibold'>loading</span>
      </div>
      )
    }
      </div>
    </>
  )
}
