import { MouseEvent, useState } from 'react'
import './Video.scss'

interface VideoProps {
  show: boolean
  onClose: () => void
}

export const Video = ({ show, onClose }: VideoProps) => {
  const [loading, setLoading] = useState(true)

  const close = () => {
    onClose()
    setLoading(true)
  }

  const stop = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    show
      ? (
        <>
          {/* eslint-disable-next-line */}
          <div
            className='fixed top-0 left-0 w-full h-full bg-slate-900/[.6] z-20 p-10'
            onClick={close}
            role='dialog'
            aria-labelledby='video-modal-title'
          >
            {/* eslint-disable-next-line */}
            <section
              className='video-modal absolute m-auto rounded-sm inset-0 w-full h-1/2 md:w-3/4 md:h-3/4 bg-white p-4 flex flex-col'
              onClick={stop}
            >
              <div className='flex justify-between'>
                <h5 id='video-modal-title' className='text-2xl text-zinc-500 font-semibold'>Get to know us a little better!</h5>
                <button className='text-2xl text-zinc-500 font-semibold' onClick={close}>
                  X
                </button>
              </div>
              <div className='h-full mt-4 w-full flex justify-center relative'>
                {
                  loading && (
                  <div className='absolute m-auto inset-0 flex items-center justify-center'>
                    <div className='w-5 h-5 border-t-2 border-r-2 rounded-full border-green-500 animate-spin' />
                    <span className='ml-4'>Loading</span>
                  </div>
                  )
                }
                <iframe
                  onLoad={() => { setLoading(false) }}
                  className={`w-full md:w-3/4 h-full ${loading ? 'opacity-0' : 'opacity-100'}`}
                  src='https://www.youtube.com/embed/QqsLTNkzvaY'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </section>
          </div>
        </>
      ) : null
  )
}
