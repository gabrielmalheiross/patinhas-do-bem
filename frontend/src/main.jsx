import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './sobre/index.jsx'
import { PrimeReactProvider } from 'primereact/api';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sobre", element: <Sobre /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <div className="tela-inteira" style={{ display: 'flex', flexDirection: 'column' }}>
        <RouterProvider router={router} />
      </div>
    </PrimeReactProvider>
  </StrictMode>,
)
