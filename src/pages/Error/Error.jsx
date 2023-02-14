import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ErrorCSS from './Error.module.css'

function Error() {
  return (
    <div className="content">
      <Header />
      <section className={ErrorCSS.error_bg}>
        <div className={ErrorCSS.error404}>404</div>
        <p className={ErrorCSS.error_text}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className={ErrorCSS.link_backhome} to="/">
          Retourner sur la page d’accueil
        </Link>
      </section>
      <Footer />
    </div>
  )
}

export default Error
