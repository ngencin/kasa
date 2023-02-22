import React from 'react'
// import CssBanner from './Banner.module.css'
// import { useLocation } from 'react-router-dom'
// import homeBannerImg from '../../assets/imghome.png'
// import aboutBannerImg from '../../assets/imgabout.png'
import BannerCSS from './Banner.module.css'

//Composant qui permet d'afficher et de changer l'image banner en fonction de la page où l'user se trouve
function Banner({ img, title }) {
  return (
    <div className={BannerCSS.banner_bg}>
      <h1 className={BannerCSS.banner_text}>{title}</h1>
      <img className={BannerCSS.banner_img} src={img} alt="banner" />
    </div>
  )
}

export default Banner
