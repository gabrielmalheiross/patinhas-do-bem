import './App.css'

function App() {

  return (
    <>
      <div className="tela-inteira">
        <img
          src="/public/bannerheader.png"
          alt="Imagem de fundo"
          className="imagem-fundo"
        />

        <div className="overlay" />

        <div className='container-portal'>
          <header className="header">
            <nav style={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'center', padding: '5px' }}>
              <img src="/public/logo-alpatas-header.png" width={150} height={49} alt="Logo" />
              <div style={{ display: 'flex', verticalAlign: 'center', padding: '5px' }}>
                <a className='botao-header' href='/'>Início</a>
                <a className='botao-header' href='/sobre'>Sobre a ONG</a>
                <a className='botao-header' href='/contato'>Contato</a>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </>
  )
}

export default App
