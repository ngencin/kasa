import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Collapse from '../../components/Collapse/Collapse'
import Banner from '../../components/Banner/Banner'
import imgAbout from '../../assets/imgAbout.png'
import AboutCSS from './About.module.css'

function About() {
  return (
    <div className={AboutCSS.content}>
      <Header />
      <div className={AboutCSS.main}>
        <Banner img={imgAbout} />
        <section className={AboutCSS.about_bg}>
          <Collapse
            h1="Fiabilité"
            p="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
         et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Collapse
            h1="Respect"
            p="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
            h1="Service"
            p="Nos équipes se tiennent à votre disposition pour vous 
        fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />

          <Collapse
            h1="Fiabilité"
            p="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
        chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à 
        l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
         Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About
