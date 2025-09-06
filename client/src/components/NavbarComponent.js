import { useState, useEffect } from 'react';
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

import { useLocation, useNavigate } from 'react-router-dom';

import { ROOT, PARTNERS, OBJECTIVES, ACTIVITIES, DELIVERABLES, MATERIALS, CONTACTUS } from '../router/RouteNames';

import lightHorizontalLogo from '../resources/LightHorizontal.png';

import '../styles/Navbar.css';

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const navCollapse = document.querySelector(".navbar-collapse");
    if (navCollapse && navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
      setIsOpen(false);
    }
}, [location])

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar className='navbar' expand='lg' {...args}>
        <NavbarBrand onClick={() => handleNavigate(ROOT.name)}>
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
              <NavLink onClick={() => handleNavigate(PARTNERS.name)}>Partners</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleNavigate(OBJECTIVES.name)}>Objectives</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => handleNavigate(ACTIVITIES.name)}>Activities</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => handleNavigate(DELIVERABLES.name)}>Deliverables</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => handleNavigate(MATERIALS.name)}>Materials?</NavLink>
            </NavItem>
            <NavItem >
                <NavLink className='contact-us'  onClick={() => handleNavigate(CONTACTUS.name)}>Contact Us!</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;