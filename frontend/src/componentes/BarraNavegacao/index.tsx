import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import notificacao from './assets/notificacao.png'
import perfil from './assets/perfil.png'
import BotaoNavegacao from '../BotaoNavegacao'

const BarraNavegacao = () => {
    return(
       
        <nav className="cl-navbar">
            <h1 className='logo'>
                <Link to ='/'>
                    <img className='logo' src={logo} alt='Logo da CareLink' />
                </Link>
            </h1>

            <h1 className='nomeempresa'>CareLink</h1>
            <ul className='acoes'>
                <li>
                   <BotaoNavegacao
                    texto=''
                    textoAltSrc='Icone noteificação'
                    imagemSrc={notificacao}
                    />
                </li>
                <li>
                   <BotaoNavegacao
                    texto=''
                    textoAltSrc='Icone perfil'
                    imagemSrc={perfil}
                    />
                </li>
            </ul>
        </nav>

    )
}

export default BarraNavegacao