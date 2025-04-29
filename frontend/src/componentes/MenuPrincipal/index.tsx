//bibliotecas
import React, { useState } from 'react';
import { Collapse, Container, Navbar, Nav, NavItem, Button, Row, Col } from 'react-bootstrap';
import './MenuPrincipal.css'
interface MenuPrincipalProps {
    onMenuItemClick: (item: string) => void;
  }

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ onMenuItemClick }) => {
    const [menuCadastroAberto, setMenuCadastroAberto] = useState(false);
    const [menuConfiguracaoAberto, setMenuConfiguracaoAberto] = useState(false);

    const menuCadastroAlternar = () => setMenuCadastroAberto(!menuCadastroAberto);
    const menuConfiguracaoAlternar = () => setMenuConfiguracaoAberto(!menuConfiguracaoAberto);
  
    return (
      <Col className="menu-bg" style={{ minHeight: '100vh' }}>
        <Button onClick={menuCadastroAlternar} variant="outline-success" className="w-100 mb-1">
          Cadastros
        </Button>
  
        <Collapse in={menuCadastroAberto}>
          <div>
            <Nav className="flex-column">
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('home')} className="it-text">
                  Home
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('usuario')} className="it-text">
                  Profile
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('settings')} className="it-text">
                  Settings
                </Button>
              </NavItem>
            </Nav>
          </div>
        </Collapse>

        <Button onClick={menuConfiguracaoAlternar} variant="outline-success" className="w-100 mb-1">
          Configuração
        </Button>
  
        <Collapse in={menuConfiguracaoAberto}>
          <div>
            <Nav className="flex-column">
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('home')} className="it-text">
                  Home
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('usuario')} className="it-text">
                  Usuário
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('settings')} className="it-text">
                  Settings
                </Button>
              </NavItem>
            </Nav>
          </div>
        </Collapse>        
      </Col>
    );
  };

export default MenuPrincipal