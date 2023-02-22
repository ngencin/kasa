import React from 'react'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import imgHome from '../../assets/imgHome.png'
import Banner from '../../components/Banner/Banner'
import Locations from '../../Data/locations.json'
import HomeCSS from './Home.module.css'

function HomePage() {
  return (
    <div className={HomeCSS.content}>
      <Header />
      <div className={HomeCSS.main}>
        <Banner img={imgHome} title="Chez vous, partout et ailleurs" />
        <section className={HomeCSS.cards_bg}>
          {Locations.map((location) => {
            // récupère les élements du fichier JSON
            return <Card key={location.id} Locations={location}></Card> // clée unique en passant l'id, affiche en totalité les locations
          })}
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default HomePage
