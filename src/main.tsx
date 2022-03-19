import { StrictMode } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

import './index.scss'
import { App } from './App'

const baseUrl = import.meta.env.VITE_API_BASE
axios.defaults.baseURL = typeof baseUrl === 'string' ? baseUrl : ''

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
