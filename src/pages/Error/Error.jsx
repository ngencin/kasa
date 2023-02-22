import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ErrorCSS from './Error.module.css'

function Error() {
  return (
    <div className="content">
      <Header />
      <div className={ErrorCSS.main}>
        <section className={ErrorCSS.error_bg}>
          <div className={ErrorCSS.error_404}>404</div>
          <p className={ErrorCSS.error_text}>
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link className={ErrorCSS.error_link} to="/">
            Retourner sur la page d’accueil
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Error
