import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SlideShow from '../../components/SlideShow/SlideShow'
// import Pictures from '../../Data/locations.json'
import { useParams } from 'react-router-dom'
import LogementCSS from './Logement.module.css'

function Logement() {
  const params = useParams()
  console.log(params)
  return (
    <div className={LogementCSS.content}>
      <Header />
      <section>
        <div>
          <SlideShow />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Logement
