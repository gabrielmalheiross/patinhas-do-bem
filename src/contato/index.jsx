import { useState } from 'react'
import '../App.css'
import Layout from '../components/Layout'

function Contato() {

    return (
        <>
            <img
                src="/bannerfooter.png"
                alt="Imagem de fundo"
                className="imagem-fundo"
            />
            <div className="overlay" />
            <Layout>
                <div className='content-main'>
                    <div className="card" style={{ width: '400px' }}>
                        <h3>Quem somos nós</h3>
                        <p style={{ textAlign: 'justify' }}>Desde 2013, nossa ong se dedica ao resgate, cuidado e adoção de animais de rua. que todos os animais
                            merecem um lar amoroso, e nossa missão é conectá-los com famílias que possam oferecer isso.
                            Além disso, contamos com a ajuda de voluntários e doações para continuar nosso trabalho.</p>
                        <p style={{ textAlign: 'justify' }}>A Alpatas é uma associação sem fins lucrativos e tem como propósito lutar pelos direitos
                            dos animais, acolher e abrigar animais sem lar e lhes garantir um novo lar por meio da
                            adoção responsável.</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contato
