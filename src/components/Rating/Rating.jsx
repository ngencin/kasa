import React from 'react'
import fullStar from '../../assets/fullStar.png'
import emptyStar from '../../assets/emptyStar.png'
import RatingCSS from './Rating.module.css'

// Composant qui affiche une étoile pleine ou vide en fonction de la notation du logement
function Rating({ rating }) {
  return (
    <div className={RatingCSS.rating_bg}>
      {Array(5) // tableau vide contenant 5 éléments
        .fill() // permet d'afficher les étoiles
        .map(
          // parcours du tableau
          (index, star) => (
            <img
              className={RatingCSS.rating_img}
              key={star}
              src={star < rating ? fullStar : emptyStar} // si la position de l'étoile est inférieur a rating l'étoile sera pleine sinon elle sera grisée
              alt="Notation étoiles"
            />
          )
        )}
    </div>
  )
}

export default Rating
