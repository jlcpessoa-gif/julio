import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Agentation } from 'agentation'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* Barra de feedback visual para agentes de IA — só em desenvolvimento */}
    {import.meta.env.DEV && <Agentation appName="julio" />}
  </StrictMode>,
)
