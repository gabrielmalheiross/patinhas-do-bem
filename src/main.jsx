import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primeicons/primeicons.css';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './sobre/index.jsx'
import { PrimeReactProvider } from 'primereact/api';
import Contato from './contato/index.jsx'
import Adocao from './adocao/index.jsx';

const router = createBrowserRouter([
  { path: "/patinhas-do-bem", element: <App /> },
  { path: "/patinhas-do-bem/sobre", element: <Sobre /> },
  { path: "/patinhas-do-bem/contato", element: <Contato /> },
  { path: "/patinhas-do-bem/adocao", element: <Adocao /> }
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
