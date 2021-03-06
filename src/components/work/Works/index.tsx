import { createContext, useMemo, useState } from 'react'

import { Filter } from './Filter'
import { WorksView } from './View'

interface WorksProps {
  className?: string
}

export const FilterContext = createContext({
  category: '',
  // eslint-disable-next-line
  setCategory: (state: string) => {},
  view: 'grid',
  // eslint-disable-next-line
  setView: (state: string) => {},
})

export const Works = ({ className = '' }: WorksProps) => {
  const [category, setCategory] = useState('all')
  const [view, setView] = useState('grid')
  const ctxValue = useMemo(() => ({
    category, setCategory, view, setView,
  }), [category, view])

  return (
    <main className={`${className} container mx-auto mt-9`}>
      <FilterContext.Provider value={ctxValue}>
        <Filter />
        <WorksView className='mt-9' />
      </FilterContext.Provider>
    </main>
  )
}
