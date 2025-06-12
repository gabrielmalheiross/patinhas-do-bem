import './App.css'
import Layout from './components/Layout'

function App() {

  return (
    <>

      <div className="overlay" />

      <Layout>
        <img
          src="/public/bannerheader.png"
          alt="Imagem de fundo"
          className="imagem-fundo"
        />
        <div className='content-main'>
          <h1 style={{ width: '50%' }}>Adote um animalzinho! </h1>
          <h3 style={{ width: '75%' }}>Existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.</h3>
          <a href="">Quero adotar</a>
        </div>
      </Layout>
    </>
  )
}

export default App
