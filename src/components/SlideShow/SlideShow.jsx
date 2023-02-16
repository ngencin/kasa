import React, { useState } from 'react'
import previousArrow from '../../assets/previousarrow.png'
import nextArrow from '../../assets/nextarrow.png'
// import Pictures from '../../Data/locations.json'
// import slidesCSS from './Slides.module.css'

function SlideShow() {
  const [slide, setSlide] = useState(0)
  console.log(slide)
  return (
    <div>
      <img
        src={previousArrow}
        onClick={() => setSlide(slide - 1)}
        alt="Flèche précédent"
      ></img>
      <img
        src={nextArrow}
        onClick={() => setSlide(slide + 1)}
        alt="Flèche suivant"
      ></img>
    </div>
  )
}

export default SlideShow
