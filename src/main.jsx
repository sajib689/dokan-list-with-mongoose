
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import Main from './Main/Main.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router';

createRoot(document.getElementById('root')).render(
  <div className='bg-blue-900'>
    <AuthProvider>
      <RouterProvider router={router}>
        <Main/>
      </RouterProvider>
    </AuthProvider>
  </div>,
)
