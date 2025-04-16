// In main.jsx (root file)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force light mode before rendering
document.documentElement.classList.remove('dark');
localStorage.removeItem('theme');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)