import { Helmet } from 'react-helmet'

import { PageTitle } from '@shared'
import { AboutContent, Services } from '@/components/about'

export const About = () => (
  <>
    <Helmet>
      <title>About Us - Display</title>
      <meta name='description' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    </Helmet>
    <PageTitle title='About My Business' />
    <AboutContent />
    <Services className='mb-9' />
  </>
)
