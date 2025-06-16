import '../App.css'
import Layout from '../components/Layout'
import { Button } from 'primereact/button'

function Doacao() {

    return (
        <>
            <img
                src="/patinhas-do-bem/bannerfooter.png"
                alt="Imagem de fundo"
                className="imagem-fundo"
            />
            <div className="overlay" />
            <Layout>
                <div className='content-main'>
                    <div className="card-custom" style={{ width: '400px' }}>
                        <h3>Como ajudar a Alpatas</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Transforme vidas com um gesto de amor! Sua doação ajuda a alimentar,
                            cuidar e encontrar lares para animais resgatados. Juntos, podemos fazer a diferença!
                        </p>
                        <h4>Canal de doação</h4>
                        <p style={{ textAlign: 'justify' }}>
                            <b>Pix Solidário:</b> 08.625.273/0001-33
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Banco: Sicredi
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Agência: 0810
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Conta: 33.703-1
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Doacao
