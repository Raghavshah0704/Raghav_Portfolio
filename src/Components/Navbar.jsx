import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Ordered top → bottom, same order as page layout
const NAV_SECTIONS = ['home', 'skills', 'project', 'contact'];

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100; // px from top before a section counts as active

      let current = 'home';
      NAV_SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (scrollY >= el.offsetTop - threshold) {
          current = id;
        }
      });

      setMenu(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set correct section on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ id, label, display, offset }) => (
    <li className={menu === label ? 'active' : ''}>
      <AnchorLink href={`#${id}`} offset={offset || 0} className='anchor-link' onClick={() => setMenu(label)}>
        <p>{display}</p>
        {menu === label ? <img className='und' src={underline} alt="" /> : <></>}
      </AnchorLink>
    </li>
  );

  return (
    <div className='navbar'>
      <img src={logo} alt="Raghav" className="nav-logo" />
      <ul className="nav-menu">
        <NavItem id="home"    label="home"    display="Home"     offset={0}  />
        <NavItem id="skills"  label="skills"  display="Skills"   offset={80} />
        <NavItem id="project" label="project" display="Projects" offset={80} />
        <NavItem id="contact" label="contact" display="Contact"  offset={80} />
      </ul>
      <div className="nav-connect">
        <AnchorLink offset={80} href='#contact' className='anchor-link'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar