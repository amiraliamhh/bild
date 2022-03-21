import { Helmet } from 'react-helmet'

import { Banner, LearnMore, Featured } from '@/components/home'

export const Home = () => (
  <>
    <Helmet>
      <title>Homepage - Display</title>
      <meta name='description' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    </Helmet>
    <Banner />
    <LearnMore className='mt-[22rem] sm:mt-[20rem] md:mt-[16.875rem]' />
    <Featured className='mt-10 mb-10' />
  </>
)
