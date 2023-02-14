import React from 'react'
import { Link } from 'react-router-dom'
import CardCSS from './Card.module.css'

// fonction affichage des logements
function Card({ Locations }) {
  return (
    // Card qui affiche les logements, avec un click qui mène vers l'id d'un logement - state gère l'affichage depuis le JSON

    <div className={CardCSS.card_column}>
      <Link to={{ pathname: `/logement/${Locations.id}` }} state={Locations}>
        <img
          className={CardCSS.card_img}
          src={Locations.cover}
          alt={Locations.title}
        />
        <h2 className={CardCSS.card_title}>{Locations.title}</h2>
      </Link>
    </div>
  )
}

export default Card
