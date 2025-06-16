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
            label: 'Quero adotar',
            icon: 'pi pi-shield',
            command: () => {
                navigate('/patinhas-do-bem/adocao')
            }
        },
        {
            label: 'Quero doar',
            icon: 'pi pi-send',
            command: () => {
                navigate('/patinhas-do-bem/doacao')
            }
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope',
            command: () => {
                navigate('/patinhas-do-bem/contato')
            }
        },
        {
            label: 'Sobre a ONG',
            icon: 'pi pi-building-columns',
            command: () => {
                navigate('/patinhas-do-bem/sobre')
            }
        },
    ];

    const onInicio = () => {
        navigate('/patinhas-do-bem')
    }

    const start = <img src="/patinhas-do-bem/logo-alpatas-header.png" className='cursor-pointer' onClick={onInicio} width={150} height={49} alt="Logo" />;

    return (
        <header className="cabecalho shadow-4">
            <div className='container-portal'>
                <Menubar model={items} start={start} />
            </div>
        </header>
    )
}