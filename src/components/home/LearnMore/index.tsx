import { useState } from 'react'
import { ReactComponent as Play } from '@/assets/play.svg'

import { Video } from '../Video'
import './LearnMore.scss'

interface LearnMoreProps {
  className?: string
}

export const LearnMore = ({ className = '' }: LearnMoreProps) => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <section className={`py-8 bg-neutral-200 ${className}`}>
        <div className='container mx-auto grid grid-cols-12 gap-4 justify-center'>
          <button
            className='video-player col-span-12 lg:col-span-5 min-w-[380px] bg-orange-600 h-[240px] justify-self-center self-center relative cursor-pointer'
            onClick={() => { setShowVideo(true) }}
          >
            <Play className='absolute m-auto inset-0 w-9 h-14' />
            <div className='h-[23px] bg-orange-500 w-full absolute bottom-0' />
          </button>
          <div className='col-span-12 lg:col-span-7 justify-self-center max-w-lg lg:max-w-full mt-4 lg:mt-0 text-center lg:text-left'>
            <h2 className='text-neutral-500 text-2xl font-semibold uppercase'>Get To Know Us a Little Better!</h2>
            <p className='text-sm mt-4 leading-6 text-zinc-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
              vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
              Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
              congue ut, luctus a nulla. Donec sit amet sapien neque,
              id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue
              lacinia.
            </p>
            <p className='text-sm mt-4 leading-6 text-zinc-500'>
              Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet
              sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque
              arcu a elit congue lacinia.
            </p>
          </div>
        </div>
      </section>
      <Video show={showVideo} onClose={() => { setShowVideo(false) }} />
    </>
  )
}
