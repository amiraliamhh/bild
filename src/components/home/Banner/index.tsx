import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@shared'

import './Banner.scss'

export const Banner = () => {
  const bannerImg = useRef(null)

  return (
    <section className='h-105 bg-green-500 relative'>
      <div className='w-full h-full overflow-hidden'>
        <img src='/sunburst.svg' className='w-full' alt='sunburst' />
      </div>
      <div className='absolute container mx-auto top-0 left-0 right-0 flex flex-col items-center'>
        <div className='w-[88%]'>
          <img ref={bannerImg} className='banner-img w-full' src='/devicesx2.png' alt='Devices' width='830' height='472' />
          <div className='description w-full flex justify-center'>
            <p className='text-center text-neutral-400 mt-10 max-w-[49.0625rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy
              lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.
            </p>
          </div>
          <div className='browser w-full flex justify-center mt-4'>
            <Link to='/work'>
              <Button className='px-[18px]'>
                BROWSE PORTFOLIO
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
