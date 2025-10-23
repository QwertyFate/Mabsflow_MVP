import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authentication from './pages/authentication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication />
  </StrictMode>,
)
