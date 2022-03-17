import { Outlet } from 'react-router-dom'

import {
  Header, Navbar, Trial, Footer,
} from '@shared'

export const Layout = () => (
  <>
    <Header />
    <Navbar />
    <Outlet />
    <Trial />
    <Footer />
  </>
)
