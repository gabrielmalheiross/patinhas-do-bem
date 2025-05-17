import './index.css';

export default function Header() {
    return (
        <header className="cabecalho shadow-4">
            <div className='container-portal'>
                <nav style={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'center', padding: '5px' }}>
                    <img src="/public/logo-alpatas-header.png" width={200} height={65} alt="Logo" />
                    <div style={{ display: 'flex', verticalAlign: 'center', padding: '5px' }}>
                        <button>Início</button>
                        <button>Sobre a ONG</button>
                        <button>Contato</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}