import { PageTitle } from '@shared'
import { AboutContent, Services } from '@/components/about'

export const About = () => (
  <>
    <PageTitle title='About My Business' />
    <AboutContent />
    <Services className='mb-9' />
  </>
)
