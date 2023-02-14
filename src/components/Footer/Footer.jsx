import React from 'react'
import LogoFooter from '../../assets/logoFooter.png'
import FooterCSS from './Footer.module.css'

function Footer() {
  return (
    <div className={FooterCSS.footer_bg}>
      <img className={FooterCSS.logo_footer} src={LogoFooter} alt="Logo Kasa" />
      <p className={FooterCSS.text_footer}>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
