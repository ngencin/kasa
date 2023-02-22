import React, { useState } from 'react'
import previousArrow from '../../assets/previousArrow.png'
import nextArrow from '../../assets/nextArrow.png'
import SlideShowCSS from './SlideShow.module.css'

// Composant qui permet d'afficher le diaporama
const SlideShow = ({ slides }) => {
  const [slide, setSlide] = useState(0) // useState permet de mettre à jour la variable slide dans le diaporama

  const previous = () => {
    const isFirstSlide = slide === 0
    const newSlide = isFirstSlide ? slides.length - 1 : slide - 1
    setSlide(newSlide)
  }

  const next = () => {
    const isLastSlide = slide === slides.length - 1
    const newSlide = isLastSlide ? 0 : slide + 1
    setSlide(newSlide)
  }

  const showNavigation = slides.length > 1 // condition pour afficher ou cacher les boutons de navigation

  return (
    <div className={SlideShowCSS.slides_pictures}>
      {showNavigation && ( // affiche les boutons de navigation si la condition est vraie
        <button
          className={SlideShowCSS.slides_previous}
          onClick={previous}
          disabled={slide === 0}
        >
          <img src={previousArrow} alt="Flèche précédent"></img>
        </button>
      )}
      <div
        className={SlideShowCSS.slides_img}
        style={{ backgroundImage: `url(${slides[slide]})` }} // Affiche les images de l'objet JSON
      >
        <h2>
          {slide + 1}/{slides.length}
        </h2>
      </div>
      {showNavigation && ( // affiche les boutons de navigation si la condition est vraie
        <button
          className={SlideShowCSS.slides_next}
          onClick={next}
          disabled={slide === slides.length - 1}
        >
          <img src={nextArrow} alt="Flèche suivant" />
        </button>
      )}
    </div>
  )
}

export default SlideShow
