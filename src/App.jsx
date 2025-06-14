import './App.css'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <img
        src="/patinhas-do-bem/public/bannerheader.png"
        alt="Imagem de fundo"
        className="imagem-fundo"
      />

      <div className="overlay" />

      <Layout>
        <div className='content-main'>
          <h1 style={{ width: '50%' }}>Adote um animalzinho! </h1>
          <h3 style={{ width: '75%' }}>Existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.</h3>
          <a href="/patinhas-do-bem/adocao">Quero adotar</a>
        </div>
      </Layout>
    </>
  )
}

export default App
