import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.sass'
import './styles/main.sass'

createRoot(document.getElementById('root')!).render(
    <App />
)
