// import { useNavigate } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import { Button } from 'primereact/button';

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <img
        src="/patinhas-do-bem/bannerheader.png"
        alt="Imagem de fundo"
        className="imagem-fundo"
      />

      <div className="overlay" />

      <Layout>
        <div className='content-main'>
          <h1 className='w-100 md:w-75'>Adote um animalzinho! </h1>
          <h3 className='w-75'>Existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.</h3>
          <Button
            // onClick={() => navigate('/patinhas-do-bem/adocao')}
            label="Quero adotar"
            severity="info" text raised />
        </div>
      </Layout>
    </>
  )
}

export default App
