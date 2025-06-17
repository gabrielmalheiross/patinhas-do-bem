import '../App.css'
import Layout from '../components/Layout'
import { Card } from 'primereact/card'

function Sobre() {

    return (
        <>
            <img
                src="/bannerabout.png"
                rel="preload"
                alt="Imagem de fundo"
                className="imagem-fundo"
            />
            <div className="overlay" />
            <Layout>
                <div className='content-main p-3'>
                    <Card className="max-w-25rem">
                        <h3>Quem somos nós</h3>
                        <p className='text-justify'>
                            Desde 2013, nossa ONG se dedica ao resgate, cuidado e promoção da adoção de animais de rua.
                        </p>
                        <p className='text-justify'>
                            Todos os animais merecem um lar amoroso, e nossa missão é conectá-los com famílias que possam oferecer isso.
                            Além disso, contamos com a ajuda de voluntários e doações para continuar nosso trabalho.
                        </p>
                        <p className='text-justify'>
                            A Alpatas é uma associação sem fins lucrativos e tem como propósito lutar pelos direitos dos animais,
                            acolher e abrigar animais sem lar e lhes garantir um novo lar por meio da adoção responsável.
                        </p>
                    </Card>
                </div>
            </Layout>
        </>
    )
}

export default Sobre
