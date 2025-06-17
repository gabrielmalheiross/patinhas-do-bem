import Layout from '../components/Layout'
import { Card } from 'primereact/card';
import '../App.css'

function Contato() {

    return (
        <>
            <img
                loading='lazy'
                rel="preload"
                src="/bannerfooter.png"
                alt="Imagem de fundo"
                className="imagem-fundo"
            />
            <div className="overlay" />
            <Layout>
                <div className='content-main p-3'>
                    <Card className="max-w-25rem">
                        <h3>Contato e Endereço</h3>
                        <p className='align-items-center text-justify'><i className='pi pi-phone' /> Telefone: 65 99605-6441</p>
                        <p className='align-items-center text-justify'><i className='pi pi-building-columns' /> Endereço: Avenida da Fé, 990-N, Bairro Téssele, ao lado do Ecoponto, Lucas do Rio Verde 78455-000.</p>
                        <p className='align-items-center text-justify'><i className='pi pi-instagram' /> Instagram: <a href="https://www.instagram.com/alpataslrv/" target='_blank'>@alpataslrv</a>.</p>
                    </Card>
                </div>
            </Layout>
        </>
    )
}

export default Contato
