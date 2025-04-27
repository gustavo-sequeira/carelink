// bibliotecas
import { useEffect, useRef, useState } from 'react'
import { Modal, Button, Container, Form, FormControl, Navbar } from 'react-bootstrap'
// components
import http from '../../http'
import MenuPerfilDropDown from '../MenuPerfilDropDown'
import BotaoNavegacao from '../BotaoNavegacao'
// css
import './BarraNavegacao.css'
// imagens
import notificacao from './assets/notificacao.png'
import perfil from './assets/perfil.png'
import AlertMessage from '../AlertMessage/AlertMessage'

const BarraNavegacao = () => {
  const token = sessionStorage.getItem('access_token')
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)
  const [showDropdownPerfil, setShowDropdownPerfil] = useState(false);

  const [alertShow, setAlertShow] = useState(false)
  const [erroMessage, setErroMessage] = useState('')

  const toggleDropdown = () => {
    setShowDropdownPerfil((prev) => !prev)
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
        if (erro?.response?.data) {
          setErroMessage(erro.response.data)
        } else {
          setErroMessage('Aconteceu algo inesperado ao efetuar o seu login'
          )
        }
        setAlertShow(true);
      })
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdownPerfil(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Modal
        show={alertShow}
        onHide={() => {
          setAlertShow(false);
          setErroMessage('');
        }}
        centered
        background="static"
      >
        <Modal.Body>
          <AlertMessage
            variant="danger"
            message={erroMessage}
            onClose={() => {
              setAlertShow(false);
              setErroMessage('');
            }}
          />

        </Modal.Body>
      </Modal>

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
                  <MenuPerfilDropDown show={showDropdownPerfil} onClose={() => setShowDropdownPerfil(false)} />
                </div>
              </div>}
          </ul>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraNavegacao