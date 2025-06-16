import '../App.css'
import Layout from '../components/Layout'
import { Button } from 'primereact/button'

function Adocao() {

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
                        <h3>Quer adotar um animalzinho?</h3>
                        <p style={{ textAlign: 'justify' }}>
                            O processo de adoção começa com um précadatro para analisarmos o
                            seu perfil e interesses para seu novo amiguinho.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Após o preenchimento do formulário, será enviado no número cadastrado no formulário
                            fotos e descrições que se enquadram na seu perfil de acordo com as respostas.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            A partir da resposta, agendaremos a data para sua visita na
                            nossa ONG, para realizarmos todo o procedimento pessoalmente.
                        </p>
                        <Button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSedgikgUGgNszSN3caiK0tkeJlvZ7_mITwXqqtwSg3uP3litQ/viewform?usp=dialog', '_blank')}
                            label="Começar processo de adoção"
                            severity="info" text raised />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Adocao
