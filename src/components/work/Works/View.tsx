import {
  useCallback,
  useContext, useEffect, useRef,
} from 'react'

import { useFetch } from '@/hooks'

import { NoResult } from './NoResult'
import { FilterContext } from './index'
import { GridView } from './GridView'
import { ListView } from './ListView'
import './View.scss'

interface WorksViewProps {
  className?: string
}

export interface WorkItem {
  id: number
  title: string
  image: string
  category: string
}

export const WorksView = ({ className = '' }: WorksViewProps) => {
  const currentPage = useRef(0)
  const fetchNext = useRef(true)
  const observer = useRef<IntersectionObserver>()
  const { category, view } = useContext(FilterContext)

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

  if (!response?.length && !loading) return <NoResult />

  return (
    <>
      <section
        className={`grid gap-4 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} ${className}`}
      >
        {
          response?.map(({ id, image, title }, index) => {
            const ref = index === response.length - 1 ? { ref: lastWorkElement } : {}

            if (view === 'list') {
              return (
                <ListView
                  title={title}
                  image={image}
                  key={id}
                  {...ref}
                />
              )
            }

            return (
              <GridView
                title={title}
                image={image}
                key={id}
                {...ref}
              />
            )
          })
        }
      </section>
      <div className='h-10 w-full flex items-center'>
        {
          loading
          && (
          <div className='flex items-center'>
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
