import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import LogementCSS from './Logement.module.css'
import Locations from '../../Data/locations.json'
import SlideShow from '../../components/SlideShow/SlideShow'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Error from '../Error/Error'

function Logement() {
  const params = useParams()
  const logId = Locations.find((logement) => logement.id === params.id)
  const paramsError = logId
  if (!paramsError) return <Error />

  const slides = logId.pictures
  const rating = logId.rating

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
          <div className={LogementCSS.home_header}>
            <div className={LogementCSS.home_title_location_tags_bg}>
              <div className={LogementCSS.home_title}> {logId.title} </div>
              <div className={LogementCSS.home_location}>{logId.location}</div>
              <div className={LogementCSS.home_tags_bg}>
                {logId.tags.map((tag, index) => (
                  <div className={LogementCSS.home_tags} key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className={LogementCSS.home_host_ratings}>
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
              <div className={LogementCSS.home_ratings_bg}>
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
