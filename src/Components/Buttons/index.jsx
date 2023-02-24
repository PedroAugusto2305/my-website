import React from 'react';
import { FaInstagram } from 'react-icons/fa'

import './styles.css'

const Button = () => {
  return (
    <button className='home-button'><FaInstagram className='button-icon' />Instagram</button>
   );
}

export default Button;
