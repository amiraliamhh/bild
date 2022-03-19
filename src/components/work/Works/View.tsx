import { useFetch } from '@/hooks'

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
  const { response } = useFetch<WorkItem[]>({
    url: '/works',
    params: {
      _page: 1,
      _limit: 9,
    },
    defaultResponse: [],
  })

  return (
    <section className={`${className} grid grid-cols-3 gap-4`}>
      {
        response?.map(({ id, image, title }) => (
          <div key={id} className='w-full h-[220px] bg-slate-100'>
            <img src={`${import.meta.env.VITE_API_BASE}${image}`} alt={title} />
          </div>
        ))
      }
    </section>
  )
}
