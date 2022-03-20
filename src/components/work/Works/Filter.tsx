import {
  Fragment, useContext, useEffect,
} from 'react'

import { ReactComponent as GridView } from '@/assets/grid-view.svg'
import { ReactComponent as ListView } from '@/assets/list-view.svg'

import { FilterContext } from './index'

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
  const {
    category, setCategory, view, setView,
  } = useContext(FilterContext)

  useEffect(() => {
    const changeFilter = () => {
      setCategory(window.location.hash.replace('#', ''))
    }

    window.addEventListener('hashchange', changeFilter)

    return () => {
      window.removeEventListener('hashchange', changeFilter)
    }
  })

  return (
    <section className='grid grid-cols-2' id='filters'>
      <div className='col-span-2 md:col-span-1 overflow-auto'>
        {
          filters.map((filter, index) => (
            <Fragment key={filter}>
              <a className={`text-lg leading-[1.375rem] font-semibold uppercase ${category === filter ? 'text-green-500' : 'text-zinc-500'}`} href={`#${filter}`}>{filter}</a>
              {
                index !== filters.length - 1
                && <span className='text-lg text-zinc-500 font-semibold leading-[1.375rem]'>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
              }
            </Fragment>
          ))
        }
      </div>
      <div className='flex col-span-2 md:col-span-1 mt-4 md:mt-0 justify-self-end'>
        <GridView
          onClick={() => { setView('grid') }}
          className={`cursor-pointer ${view === 'grid' ? viewIconSelected : viewIconNeutral}`}
        />
        <ListView
          onClick={() => { setView('list') }}
          className={`cursor-pointer ml-[10px] ${view === 'list' ? viewIconSelected : viewIconNeutral}`}
        />
      </div>
    </section>
  )
}
