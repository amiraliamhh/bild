import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ScrollTop } from '@shared'
import { Layout } from '@/layouts/Layout'
import { Home } from '@/pages/Home'
import { Work } from '@/pages/Work'
import { Contact } from '@/pages/Contact'
import { About } from '@/pages/About'
import { ErrorBoundary } from '@/errors/ErrorBoundary'
import { NotFound } from '@/errors/NotFound'

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <ScrollTop>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='*' element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path='work' element={<Work />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </ScrollTop>
    </ErrorBoundary>
  </BrowserRouter>
)
