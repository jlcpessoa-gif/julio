import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Agentation } from 'agentation'
import './index.css'
import App from './App.tsx'

// Servidor do agentation-mcp (o agente lê as anotações daqui).
// Para mudar, defina VITE_AGENTATION_ENDPOINT no arquivo .env.local.
const agentationEndpoint =
  import.meta.env.VITE_AGENTATION_ENDPOINT ?? 'http://localhost:4747'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* Barra de feedback visual para agentes de IA — só em desenvolvimento */}
    {import.meta.env.DEV && (
      <Agentation appName="julio" endpoint={agentationEndpoint} />
    )}
  </StrictMode>,
)
