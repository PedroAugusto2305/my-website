import React from 'react';

import logo from '../../assets/logo.svg'

import './styles.css'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <img src={logo} alt="" />
      <ul className='navbar-menu'>
        <li>Inicio</li>
        <li>Quem sou?</li>
        <li>Projetos</li>
        <li>Habilidades</li>
        <li>Serviços</li>
       </ul>
    </nav>
   );
}

export default Navbar;
