import React from 'react'
import Logo from '../../assets/logoHeader.svg'
import { NavLink } from 'react-router-dom'
import headerCSS from './Header.module.css'

function Header() {
  return (
    <header>
      <div className={headerCSS.header_bg}>
        <img className={headerCSS.header_logo} src={Logo} alt="Logo Kasa" />
        <div className={headerCSS.navbar}>
          <NavLink
            className={headerCSS.nav_home}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : 'none',
              }
            }}
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            className={headerCSS.nav_about}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : 'none',
              }
            }}
            to="/about"
          >
            A propos
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
