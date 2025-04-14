import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import notificacao from './assets/notificacao.png'
import perfil from './assets/perfil.png'
import BotaoNavegacao from '../BotaoNavegacao'

import { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

import './BarraNavegacao.css'

const BarraNavegacao = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Login:', email, senha);
      // Aqui você pode chamar uma API ou tratar o login
    };
  
    return (
      <Navbar bg="dark" variant="dark" expand="lg" color="#F2FBFC">
        <Container fluid>
          <Navbar.Brand href="#">CareLink</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-login" />
          <Navbar.Collapse id="navbar-login">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Sobre</Nav.Link>
            </Nav>
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
        </Container>
      </Navbar>
    );
}

export default BarraNavegacao