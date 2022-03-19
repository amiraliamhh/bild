import { Fragment, useEffect, useState } from 'react'

import { ReactComponent as GridView } from '@/assets/grid-view.svg'
import { ReactComponent as ListView } from '@/assets/list-view.svg'

const filters = [
  'all',
  'print',
  'photography',
  'web',
  'applications',
]

const viewIconNeutral = 'fill-neutral-500 hover:fill-neutral-600'
const viewIconSelected = 'fill-green-500 hover:fill-green-600'

export const Filter = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0])
  const [currentView, setView] = useState('grid')

  useEffect(() => {
    const changeFilter = () => {
      setActiveFilter(window.location.hash.replace('#', ''))
    }

    window.addEventListener('hashchange', changeFilter)

    return () => {
      window.removeEventListener('hashchange', changeFilter)
    }
  })

  return (
    <section className='flex justify-between' id='filters'>
      <div>
        {
          filters.map((filter, index) => (
            <Fragment key={filter}>
              <a className={`text-lg leading-[1.375rem] font-semibold uppercase ${activeFilter === filter ? 'text-green-500' : 'text-zinc-500'}`} href={`#${filter}`}>{filter}</a>
              {
                index !== filters.length - 1
                && <span className='text-lg text-zinc-500 font-semibold leading-[1.375rem]'>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
              }
            </Fragment>
          ))
        }
      </div>
      <div className='flex'>
        <GridView
          onClick={() => { setView('') }}
          className={`cursor-pointer ${currentView === 'grid' ? viewIconSelected : viewIconNeutral}`}
        />
        <ListView
          onClick={() => { setView('') }}
          className={`cursor-pointer ml-[10px] ${currentView === 'list' ? viewIconSelected : viewIconNeutral}`}
        />
      </div>
    </section>
  )
}
