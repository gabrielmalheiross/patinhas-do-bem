import '../App.css'
import Layout from '../components/Layout'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

function Adocao() {

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
                        <h3>Quer adotar um animalzinho?</h3>
                        <p style={{ textAlign: 'justify' }}>
                            O processo de adoção começa com um pré-cadastro para analisarmos o seu perfil e
                            classificarmos seus interesses relativos ao seu novo amiguinho.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Após o preenchimento do formulário, será enviado no número de celular cadastrado
                            fotos e descrições que se enquadram no seu perfil, de acordo com as respostas.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            A partir da resposta, agendaremos a data de sua visita à nossa ONG, para
                            realizarmos todo o procedimento pessoalmente.
                        </p>
                    </Card>
                    <Button
                        style={{ backgroundColor: "#ffaf13", color: "white" }}
                        className='mt-5'
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSedgikgUGgNszSN3caiK0tkeJlvZ7_mITwXqqtwSg3uP3litQ/viewform?usp=dialog', '_blank')}
                        label="Começar processo de adoção"
                        severity="info" text raised />
                </div>
            </Layout>
        </>
    )
}

export default Adocao
