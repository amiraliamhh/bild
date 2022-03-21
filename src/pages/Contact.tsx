import { Helmet } from 'react-helmet'

import { PageTitle } from '@shared'
import { Map, Form, ContactInfo } from '@/components/contact'

export const Contact = () => (
  <>
    <Helmet>
      <title>Contact Us - Display</title>
      <meta name='description' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
      <link rel='canonical' href='/contact' />
    </Helmet>
    <PageTitle title='Got a Question or Inquiry?' />
    <Map />
    <div className='container mx-auto my-10 grid grid-cols-12 gap-4'>
      <Form className='col-span-12 lg:col-span-8' />
      <ContactInfo className='col-span-12 lg:col-span-4' />
    </div>
  </>
)
