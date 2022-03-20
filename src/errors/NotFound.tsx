import { Link } from 'react-router-dom'

import { Button } from '@shared'

export const NotFound = () => (
  <section className='container mx-auto flex flex-col items-center my-20'>
    <h2 className='text-zinc-500 font-semibold text-6xl'>404</h2>
    <h3 className='text-zinc-500 font-semibold text-4xl mt-5'>Not Found!</h3>
    <p className='text-zinc-500 mt-5'>
      The page you&apos;re looking for was not found.
    </p>
    <Link to='/'>
      <Button className='uppercase mt-5 px-5'>
        Go back to the homepage
      </Button>
    </Link>
  </section>
)
