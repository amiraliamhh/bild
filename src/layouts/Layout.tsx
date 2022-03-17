import { Outlet } from 'react-router-dom'

import { Header, Navbar } from '@shared'

export const Layout = () => (
  <>
    <Header />
    <Navbar className='mb-5' />
    <Outlet />
  </>
)
