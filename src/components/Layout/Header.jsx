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
                navigate('/')
            }
        },
        {
            label: 'Quero adotar',
            icon: 'pi pi-shield',
            command: () => {
                navigate('/adocao')
            }
        },
        {
            label: 'Quero doar',
            icon: 'pi pi-send',
            command: () => {
                navigate('/doacao')
            }
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope',
            command: () => {
                navigate('/contato')
            }
        },
        {
            label: 'Sobre a ONG',
            icon: 'pi pi-building-columns',
            command: () => {
                navigate('/sobre')
            }
        },
    ];

    const onInicio = () => {
        navigate('/')
    }

    const start = <img src="/logo-alpatas-header.png" rel="preload" className='cursor-pointer' onClick={onInicio} width={150} height={49} alt="Logo" />;

    return (
        <header className="cabecalho shadow-4">
            <div className='container-portal'>
                <Menubar model={items} start={start} />
            </div>
        </header>
    )
}