// bibliotecas 
import React from "react";
import { Dropdown } from "react-bootstrap";
// css
import './MenuPerfilDropDown.css'

interface Props {
  show: boolean
  onClose: () => void;
}

const MenuPerfilDropDown: React.FC<Props> = ({ show, onClose }) => {
  const handleItemClick = () => {
    onClose(); // fecha o menu ao clicar em qualquer item
  };

  const logout = () => {
    sessionStorage.removeItem('access_token'); // ou localStorage, depende de onde você salva
    window.location.href = '/'; // ou use navigate() se estiver usando react-router v6
    onClose();
  };
  return (
    <div className="position-relative">
      <Dropdown show={show} align="end">
        <Dropdown.Menu className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div className="fs-5">
            <Dropdown.Item onClick={handleItemClick}>Meus Dados</Dropdown.Item>
            <Dropdown.Item onClick={handleItemClick}>Configuração</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default MenuPerfilDropDown;