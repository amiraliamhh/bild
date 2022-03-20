import { Outlet } from 'react-router-dom'

import {
  Header, Navbar, Trial, Footer,
} from '@shared'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren<{}>) => (
  <>
    <Header />
    <Navbar />
    {
      children || <Outlet />
    }
    <Trial />
    <Footer />
  </>
)
