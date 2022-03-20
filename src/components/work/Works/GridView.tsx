import {
  forwardRef,
} from 'react'

import { ReactComponent as LinkIcon } from '@/assets/link.svg'

interface GridViewProps {
  image: string
  title: string
}

export const GridView = forwardRef<HTMLDivElement, GridViewProps>(
  ({ title, image }: GridViewProps, ref) => (
    <div
      className='work-item w-full md:h-[300px] lg:h-[220px] bg-slate-100 relative'
      ref={ref}
    >
      <img className='w-full h-full' src={`${import.meta.env.VITE_API_BASE}${image}`} alt={title} width='300' height='220' />
      <a className='absolute inset-0 m-auto justify-center items-center hidden' href='http://example.com/' target='_blank' rel='noreferrer'>
        <button className='w-[97px] h-[97px] bg-green-500 hover:bg-green-600 rounded-full flex justify-center items-center'>
          <LinkIcon width='32px' height='42px' />
        </button>
      </a>
    </div>
  ),
)
