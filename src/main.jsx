// In main.jsx (root file)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force dark mode before rendering
if (!localStorage.getItem('theme')) {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
