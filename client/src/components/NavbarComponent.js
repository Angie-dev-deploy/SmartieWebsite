import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from 'reactstrap';

import { useNavigate } from 'react-router-dom';

import { ROOT, PARTNERS, OBJECTIVES, ACTIVITIES, DELIVERABLES, MATERIALS, CONTACTUS } from '../router/RouteNames';

import lightHorizontalLogo from '../resources/LightHorizontal.png';

import '../styles/Navbar.css';

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar className='navbar' expand='lg' {...args}>
        <NavbarBrand onClick={() => navigate(ROOT.name)}>
            <img
                src={lightHorizontalLogo}
                width="243"
                height="72"
                alt="Smartie"
            />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink onClick={() => navigate(PARTNERS.name)}>Partners</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => navigate(OBJECTIVES.name)}>Objectives</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => navigate(ACTIVITIES.name)}>Activities</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => navigate(DELIVERABLES.name)}>Deliverables</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => navigate(MATERIALS.name)}>Materials?</NavLink>
            </NavItem>
            <NavItem >
                <NavLink className='contact-us'  onClick={() => navigate(CONTACTUS.name)}>Contact Us!</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;