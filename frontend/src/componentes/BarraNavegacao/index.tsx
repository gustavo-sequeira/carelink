import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import notificacao from './assets/notificacao.png'
import perfil from './assets/perfil.png'
import BotaoNavegacao from '../BotaoNavegacao'

import { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

import './BarraNavegacao.css'
import http from '../../http'

const BarraNavegacao = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const token = sessionStorage.getItem('token')
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)

  const aoEfetuarLogin = () => {
    setUsuarioEstaLogado(true)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login:', email, senha);

    const usuario = {
      email,
      senha
    }

    http.post('auth/login', usuario)
      .then(resposta => {

        sessionStorage.setItem('token', resposta.data.access_token)
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
          {usuarioEstaLogado && <>
            <BotaoNavegacao
              texto=''
              textoAltSrc=''
              imagemSrc={notificacao}
            />
            <BotaoNavegacao
              texto=''
              textoAltSrc=''
              imagemSrc={perfil}
            />
          </>}
        </ul>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacao