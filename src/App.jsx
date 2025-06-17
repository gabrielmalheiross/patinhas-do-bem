import { useNavigate } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import { Button } from 'primereact/button';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <img
        src="/bannerheader.png"
        rel="preload"
        loading='lazy'
        alt="Imagem de fundo"
        className="imagem-fundo"
      />

      <div className="overlay" />

      <Layout>
        <div className='content-main'>
          <h1 className='w-100 md:w-75 titulo-main pt-8'>Ajude uma causa! </h1>
          <h3 className='w-75 titulo-main'>Existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.</h3>

          <div className='flex gap-5 pt-3'>
            <Button
              className='bg-white p-3'
              onClick={() => navigate('/adocao')}
              label="Quero adotar"
              severity="info" text raised />

            <Button
              className='bg-white p-3'
              onClick={() => navigate('/doacao')}
              label="Quero doar"
              severity="info" text raised />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
