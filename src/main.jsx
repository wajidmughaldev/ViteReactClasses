import { StrictMode } from 'react'
import Validation  from './components/Validation.jsx'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import StateAdvance from './components/StateAdvance.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    <Validation />
    // <StateAdvance/>
)