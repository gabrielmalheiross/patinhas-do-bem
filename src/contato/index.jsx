import { useState } from 'react'

import Layout from '../components/Layout'
import { Card } from 'primereact/card';
import '../App.css'

function Contato() {

    return (
        <>
            <img
                loading='lazy'
                src="/patinhas-do-bem/bannerfooter.png"
                alt="Imagem de fundo"
                className="imagem-fundo"
            />
            <div className="overlay" />
            <Layout>
                <div className='content-main'>
                    <div className="card-custom" style={{ width: '400px' }}>
                        <h3>Contato e Endereço</h3>
                        <p className='align-items-center'><i className='pi pi-phone' /> Telefone: 65 99605-6441</p>
                        <p className='align-items-center'>Endereço: Avenida da Fé, 990-N, Bairro Téssele, ao lado do Ecoponto, Lucas do Rio Verde 78455-000.</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contato
