import { useState } from 'react';
import './index.css';

export default function Header() {
    const [navBar, activeNavBar] = useState();
    return (
        <header className="cabecalho shadow-4">
            <div className='container-portal'>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '5px', paddingRight: '5px' }}>
                    <img src="/public/logo-alpatas-header.png" width={150} height={49} alt="Logo" />
                    <div style={{ display: 'flex', verticalAlign: 'center', padding: '5px' }}>
                        <a className='botao-header' href='/'>Início</a>
                        <a className='botao-header' href='/sobre'>Sobre a ONG</a>
                        <a className='botao-header' href='/contato'>Contato</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}