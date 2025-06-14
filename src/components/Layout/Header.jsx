import './index.css';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router';

export default function Header() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Início',
            icon: 'pi pi-home',
            command: () => {
                navigate('/patinhas-do-bem')
            }
        },
        {
            label: 'Sobre a ONG',
            icon: 'pi pi-star',
            command: () => {
                navigate('/patinhas-do-bem/sobre')
            }
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope',
            command: () => {
                navigate('/patinhas-do-bem/contato')
            }
        }
    ];

    const start = <img src="/patinhas-do-bem/logo-alpatas-header.png" width={150} height={49} alt="Logo" />;

    return (
        <header className="cabecalho shadow-4">
            <div className='container-portal'>
                <Menubar model={items} start={start} />
            </div>
        </header>
    )
}