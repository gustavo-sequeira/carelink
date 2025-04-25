// bibliotecas
import { useEffect, useRef, useState } from 'react'
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap'
// components
import http from '../../http'
import MenuPerfilDropDown from '../MenuPerfilDropDown'
import BotaoNavegacao from '../BotaoNavegacao'
// css
import './BarraNavegacao.css'
// imagens
import notificacao from './assets/notificacao.png'
import perfil from './assets/perfil.png'

const BarraNavegacao = () => {
  const token = sessionStorage.getItem('access_token')
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)
  const [showDropdown, setShowDropdown] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  };

  const aoEfetuarLogin = () => {
    setUsuarioEstaLogado(true)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuario = {
      email,
      senha
    }

    http.post('auth/login', usuario)
      .then(resposta => {

        sessionStorage.setItem('access_token', resposta.data.access_token)
        setEmail('')
        setSenha('')
        aoEfetuarLogin()
      })
      .catch(erro => {
        console.log(erro.response.data)
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message)
        } else {
          alert('Aconteceu algo inesperado ao efetuar o seu login')
        }
      })

  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navbar className="navbar-custom" variant="dark" expand="lg" >
      <Container fluid>
        <div className='nomeempresa' >CareLink</div>
        <ul className='acoes'>
          {!usuarioEstaLogado && (<>
            <Navbar.Collapse id="navbar-login">

              <Form className="d-flex" onSubmit={handleLogin}>
                <FormControl
                  type="email"
                  placeholder="Email"
                  className="me-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FormControl
                  type="password"
                  placeholder="Senha"
                  className="me-2"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <Button type="submit" variant="outline-success">Login</Button>
              </Form>
            </Navbar.Collapse>
          </>)}
          {usuarioEstaLogado &&
            <div className='botoesnavegacao'>
              <BotaoNavegacao
                texto=''
                textoAltSrc=''
                imagemSrc={notificacao}
              />
              <div ref={dropdownRef}>
                <BotaoNavegacao
                  texto=''
                  textoAltSrc=''
                  imagemSrc={perfil}
                  onClick={toggleDropdown}
                />
                <MenuPerfilDropDown show={showDropdown} onClose={() => setShowDropdown(false)} />
              </div>
            </div>}
        </ul>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacao