import { Helmet } from 'react-helmet'

import { PageTitle } from '@shared'
import { Works } from '@/components/work'

export const Work = () => (
  <>
    <Helmet>
      <title>Our Projects - Display</title>
      <meta name='description' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
      <link rel='canonical' href='/work' />
    </Helmet>
    <PageTitle title='Check Out What I can Do' />
    <Works />
  </>
)
