import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import LogementCSS from './Logement.module.css'
import Locations from '../../Data/locations.json'
import SlideShow from '../../components/SlideShow/SlideShow'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Ratings/Rating'

function Logement() {
  const params = useParams()
  const logId = Locations.find((logement) => logement.id === params.id)
  const slides = logId.pictures
  const rating = logId.rating

  console.log(params)
  console.log(logId)

  return (
    <div className={LogementCSS.content}>
      <Header />
      <div className={LogementCSS.main}>
        <section className={LogementCSS.home_bg}>
          <div className={LogementCSS.home_slideshow}>
            <SlideShow
              className={LogementCSS.home_slides}
              slides={slides}
            ></SlideShow>
          </div>
          <div className={LogementCSS.home}>
            <div className={LogementCSS.home_title}> {logId.title} </div>
            <div className={LogementCSS.home_host_bg}>
              <div className={LogementCSS.home_host_name}>
                {logId.host.name}
              </div>
              <img
                className={LogementCSS.home_host_img}
                src={logId.host.picture}
                alt="host"
              ></img>
            </div>
          </div>
          <div className={LogementCSS.home_location}> {logId.location} </div>
          <div className={LogementCSS.home_tags_ratings}>
            <div className={LogementCSS.home_tags_bg}>
              {logId.tags.map((tag, index) => (
                <div className={LogementCSS.home_tags} key={index}>
                  {tag}
                </div>
              ))}
            </div>
            <div className={LogementCSS.home_ratings_bg}>
              <div className={LogementCSS.home_ratings}>
                <Rating
                  className={LogementCSS.home_rating}
                  rating={rating}
                ></Rating>
              </div>
            </div>
          </div>

          <div className={LogementCSS.home_collapse}>
            <div className={LogementCSS.home_collapse_column_description}>
              <Collapse h1="Description" p={logId.description} />
            </div>
            <div className={LogementCSS.home_collapse_column_equipments}>
              <Collapse
                h1="Equipements"
                p={logId.equipments.map((equipement, index) => (
                  <div key={index}>{equipement}</div> // affichage liste des équipements
                ))}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Logement
