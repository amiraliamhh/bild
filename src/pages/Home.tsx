import { Banner, LearnMore, Featured } from '@/components/home'

export const Home = () => (
  <>
    <Banner />
    <LearnMore className='mt-[12rem] md:mt-[16.875rem] lg:mt-[16.875rem]' />
    <Featured className='mt-10' />
  </>
)
