import { useState } from 'react'

import Layout from '../components/Layout'
import { Card } from 'primereact/card';
import '../App.css'

function Contato() {

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
                    <Card className="md:w-25rem">
                        <h3>Quem somos nós</h3>
                        <p className='align-items-center'>Desde 2013, nossa ong se dedica ao resgate, cuidado e adoção de animais de rua. que todos os animais
                            merecem um lar amoroso, e nossa missão é conectá-los com famílias que possam oferecer isso.
                            Além disso, contamos com a ajuda de voluntários e doações para continuar nosso trabalho.</p>
                        <p className='align-items-center'>A Alpatas é uma associação sem fins lucrativos e tem como propósito lutar pelos direitos
                            dos animais, acolher e abrigar animais sem lar e lhes garantir um novo lar por meio da
                            adoção responsável.</p>
                    </Card>
                </div>
            </Layout>
        </>
    )
}

export default Contato
