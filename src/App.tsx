import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from '@/layouts/Layout'
import { Home } from '@/pages/Home'
import { Work } from '@/pages/Work'
import { Contact } from '@/pages/Contact'
import { About } from '@/pages/About'
import { ErrorBoundary } from '@/errors/ErrorBoundary'

export const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
)
