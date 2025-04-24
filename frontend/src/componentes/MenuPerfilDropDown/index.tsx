import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";

type Props = { show: boolean }

const MenuPerfilDropDown: React.FC<Props> = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowMenu(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

    return (
      <div ref={menuRef} className="position-relative">
        <Dropdown show={showMenu} align="end">
          <Dropdown.Menu className="shadow rounded-3">
            <Dropdown.Item >Profile</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item >Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };
export default MenuPerfilDropDown;