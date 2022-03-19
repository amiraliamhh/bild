import { Filter } from './Filter'
import { WorksView } from './View'

interface WorksProps {
  className?: string
}

export const Works = ({ className = '' }: WorksProps) => (
  <main className={`${className} container mx-auto mt-9`}>
    <Filter />
    <WorksView className='mt-9 mb-10' />
  </main>
)
