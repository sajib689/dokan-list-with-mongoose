import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import Main from './Main/Main.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <Main/>
    </AuthProvider>
  </>,
)
