import React from 'react'
import style from '../modules/portfolio.module.css';
import Proj1 from '../images/portfolio1.jpg';
import Proj2 from '../images/portfolio2.jpg';
import Proj3 from '../images/portfolio3.jpg';
import Proj4 from '../images/portfolio4.jpg';
import Proj5 from '../images/portfolio5.jpg';
import Proj6 from '../images/portfolio6.jpg';
import RatingStars from './RatingStars';

// <!-- portfolio section design -->

function PortfolioSec() {
  return (

    <div className={style.container}>
    <section className={style.portfolio}  id="portfolio">
        <h2 className={style.heading}>meine <span>Projekte</span></h2>

        <div className={style['portfolio-container']}>
            <div className={style['portfolio-box']}>
                <img  loading="lazy"  src={Proj1} alt="Iabout  project 1"/>
                <div className={style['portfolio-layer']}>
                    <h4>Web Projekt(|)</h4>
                    <p>mein voll funktioniertes Protfolio-Projekt von A-Z mit 100% HTML/CSS react.js Bibliothek und tailwind und auch Web-API</p>
                    <a href="https://taha00elsayed.netlify.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
      
             <div className={style['portfolio-box']}>
                <img  loading="lazy" src={Proj2} alt="about  project 2"/>
                <div className={style['portfolio-layer']}>
                    <h4>Web Projekt(||)</h4>
                    <p>Das E-Commerce projekt mit react.js,Firebase und stripe.</p>
                    <a href="https://tahazon-4c1f8.web.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className={style['portfolio-box']}>
                <img loading="lazy"  src={Proj3} alt="about project 3"/>
                <div className={style['portfolio-layer']}>
                    <h4>Web Projekt(|||)</h4>
                    <p>Das ist eine soziale Netzwerke Web/App für Angestellte/Jobsuchende: mit react.js und Firebase datenbanken.</p>
                    <a href="https://jobin-32039.web.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
             <div className={style['portfolio-box']}>
                <img loading="lazy"  src={Proj4} alt="about project 4"/>
                <div className={style['portfolio-layer']}>
                    <h4>Web Project(|V)</h4>
                    <p>Das ist einfach eine 'vollresponsive' Webseite: mit HTML un CSS </p>
                    <a href="https://main--websimpledesign.netlify.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
             <div className={style['portfolio-box']}>
                <img  loading="lazy" src={Proj5} alt="about project 5"/>
                <div className={style['portfolio-layer']}>
                    <h4>Web Project(V)</h4>
                    <p>Das Projekt für Laufen und Landkart: mit vanilla.js,MVC und leaflet </p>
                    <a href="https://simplewebmap.netlify.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
             <div className={style['portfolio-box']}>
                <img loading="lazy"  src={Proj6} alt="about project 6"/>
                <div className={style['portfolio-layer']}>
                    <h4>Web Project(V|)</h4>
                    <p>Das ist ein einfach schönes rollspiel: mit HTML/CSS und vanilla.js</p>
                    <a href="https://rollspieler.netlify.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div> 
        </div>
        <RatingStars />     
    
    </section>
    
    </div>
  )
};

export default PortfolioSec;
