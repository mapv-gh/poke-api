import React from 'react'
import Logo from "../components/Logo";
import '../sass/Logo.scss'
import { Link } from 'react-router-dom';
import '../sass/Navbar-item.scss'
export const Navbar = () => {
  return (
    <div className='navbar-container'>
            <div className="logo">
                <Logo />
            </div>
            <div className='link-container'>
              <Link className='link' to="/Pokemones">Pokemones</Link>
              <Link className='link' to="/Evoluciones">Evoluciones</Link>
            </div>
    </div>
  )
}
