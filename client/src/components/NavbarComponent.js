import { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { useLocation, useNavigate } from 'react-router-dom';

import { ROOT, PARTNERS, OBJECTIVES, ACTIVITIES, DELIVERABLES, MATERIALS, CONTACTUS } from '../router/RouteNames';

import lightHorizontalLogo from '../resources/LightHorizontal.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

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
  }, [location]);

  useEffect(() => {
        Aos.init({ duration: 1000, once: true });
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar className='smartie-navbar' expand='lg' {...args}>
        <NavbarBrand className='smartie-nav-brand' onClick={() => handleNavigate(ROOT.name)}>
            <img
                src={lightHorizontalLogo}
                data-aos="fade-in"
                width="243"
                height="72"
                alt="Smartie"
            />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className='smartie-nav-item'>
              <NavLink className='smartie-nav-link' onClick={() => handleNavigate(PARTNERS.name)}>Partners</NavLink>
            </NavItem>
            <NavItem className='smartie-nav-item'>
              <NavLink className='smartie-nav-link' onClick={() => handleNavigate(OBJECTIVES.name)}>Objectives</NavLink>
            </NavItem>
            <NavItem className='smartie-nav-item'>
                <NavLink className='smartie-nav-link' onClick={() => handleNavigate(ACTIVITIES.name)}>Activities</NavLink>
            </NavItem>
            {/* <NavItem className='smartie-nav-item'>
                <NavLink className='smartie-nav-link' onClick={() => handleNavigate(DELIVERABLES.name)}>Deliverables</NavLink>
            </NavItem> */}
            <NavItem className='smartie-nav-item'>
                <NavLink className='smartie-nav-link' onClick={() => handleNavigate(MATERIALS.name)}>Materials</NavLink>
            </NavItem>
            <NavItem className='smartie-nav-item'>
                <NavLink className='contact-us smartie-nav-link'  onClick={() => handleNavigate(CONTACTUS.name)}>Contact Us!</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;