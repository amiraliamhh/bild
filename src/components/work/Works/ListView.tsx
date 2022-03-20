import {
  forwardRef,
} from 'react'

import { ReactComponent as LinkIcon } from '@/assets/link.svg'

interface ListViewProps {
  image: string
  title: string
}

export const ListView = forwardRef<HTMLDivElement, ListViewProps>(
  ({ title, image }: ListViewProps, ref) => (
    <div
      className='work-item w-full lg:h-[220px] rounded overflow-hidden flex'
      ref={ref}
    >
      <div className='min-w-[150px] md:min-w-[300px] max-w-[50%] h-[220px] relative'>
        <img src={`${import.meta.env.VITE_API_BASE}${image}`} alt={title} width='300' height='220' />
        <a className='absolute inset-0 m-auto justify-center items-center hidden' href='http://example.com/' target='_blank' rel='noreferrer'>
          <button className='w-[97px] h-[97px] bg-green-500 hover:bg-green-600 rounded-full flex justify-center items-center'>
            <LinkIcon width='32px' height='42px' />
          </button>
        </a>
      </div>
      <div className='ml-4'>
        <p className='text-zinc-500 text-2xl font-semibold'>{title}</p>
        <p className='text-zinc-500 mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque eu erat lacus, vel congue mauris.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque eu erat lacus, vel congue mauris.
        </p>
      </div>
    </div>
  ),
)
