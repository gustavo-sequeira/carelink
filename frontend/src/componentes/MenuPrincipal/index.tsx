//bibliotecas
import React, { useState } from 'react';
import { Collapse, Container, Navbar, Nav, NavItem, Button, Row, Col } from 'react-bootstrap';

interface MenuPrincipalProps {
    onMenuItemClick: (item: string) => void;
  }

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ onMenuItemClick }) => {
    const [menuCadastroAberto, setMenuCadastroAberto] = useState(false);
    const [menuConfiguracaoAberto, setMenuConfiguracaoAberto] = useState(false);

    const menuCadastroAlternar = () => setMenuCadastroAberto(!menuCadastroAberto);
    const menuConfiguracaoAlternar = () => setMenuConfiguracaoAberto(!menuConfiguracaoAberto);
  
    return (
      <Col xs={3} md={2} className="bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
        <Button onClick={menuCadastroAlternar} variant="secondary" className="w-100 mb-3">
          Cadastros
        </Button>
  
        <Collapse in={menuCadastroAberto}>
          <div>
            <Nav className="flex-column">
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('home')} className="text-white">
                  Home
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('profile')} className="text-white">
                  Profile
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('settings')} className="text-white">
                  Settings
                </Button>
              </NavItem>
            </Nav>
          </div>
        </Collapse>

        <Button onClick={menuConfiguracaoAlternar} variant="secondary" className="w-100 mb-3">
          Configuração
        </Button>
  
        <Collapse in={menuConfiguracaoAberto}>
          <div>
            <Nav className="flex-column">
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('home')} className="text-white">
                  Home
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('profile')} className="text-white">
                  Profile
                </Button>
              </NavItem>
              <NavItem>
                <Button variant="link" onClick={() => onMenuItemClick('settings')} className="text-white">
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