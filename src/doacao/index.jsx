import { Card } from 'primereact/card'
import '../App.css'
import Layout from '../components/Layout'

function Doacao() {

    return (
        <>
            <img
                src="/bannerfooter.png"
                rel="preload"
                alt="Imagem de fundo"
                className="imagem-fundo"
            />
            <div className="overlay" />
            <Layout>
                <div className='content-main p-3'>
                    <Card className="max-w-25rem">
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
                            <b>Banco:</b> Sicredi
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <b>Agência:</b> 0810
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <b>Conta:</b> 33.703-1
                        </p>
                    </Card>
                </div>
            </Layout>
        </>
    )
}

export default Doacao
