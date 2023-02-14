import React, { useState } from 'react'
import upArrow from '../../assets/fleche.png'
import CollapseCSS from './Collapse.module.css'

function Collapse({ h1, p }) {
  const [arrowUp, setArrow] = useState('') // affiche la variable et modifie la variable

  return arrowUp ? (
    <div className={CollapseCSS.collapse_column}>
      <div className={CollapseCSS.collapse_title}>
        {h1}
        {/* événement de la souris, affiche le texte */}

        <img
          className={CollapseCSS.collapse_img}
          src={upArrow}
          alt="fleche"
          onClick={() => setArrow(false)}
        ></img>
      </div>
      <div className={CollapseCSS.collapse_text}>{p}</div>
    </div>
  ) : (
    <div className={CollapseCSS.collapse_column}>
      <div className={CollapseCSS.collapse_title}>
        {h1}
        {/* événement de la souris, cache le texte */}

        <img
          className={CollapseCSS.collapse_img}
          src={upArrow}
          alt="fleche"
          onClick={() => setArrow(true)}
        ></img>
      </div>
    </div>
  )
}

export default Collapse
