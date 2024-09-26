
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import Main from './Main/Main.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider>
      <Main/>
      </RouterProvider>
    </AuthProvider>
  </>,
)
