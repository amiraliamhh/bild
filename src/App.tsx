import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Work } from '@/pages/Work'
import { ErrorBoundary } from '@/errors/ErrorBoundary'

export const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
)
