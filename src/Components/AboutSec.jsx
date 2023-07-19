import React,{useContext,useState} from 'react'
import style from '../modules/abouts.module.css';
import AboutImg from '../images/about.png';
import TahaImg from '../images/TahaImg/face-taha-small.jpg';
import Context from '../context/Context';
import classNames from 'classnames';
import AccordionPage from './accordion/AccordionPage';



// <!-- about section design -->
function AboutSec () {
  const [isAdded, setAddedText] = useState( false );
  const { isLightMode } = useContext( Context );


  const homeMode = `${isLightMode ? `${style.lightmode}` : ''}`;
  const imgMode = `${isLightMode ? `${style.imgmode}` : ''}`;


  return (
     <div className={style.container} >
      
      <section className={classNames( style.about, homeMode )} id="about">
         
        <div className={classNames(style.profileUserImg,imgMode)} >
            <img loading="lazy"
                src={TahaImg}
                alt="taha"
          />
        </div>
        
        <div className={style['about-content']}>
            <h2 className={style['f-header']}>About <span>Me</span></h2>
            <h3 className={style['sec-header']}>Frontend Entwickler!</h3>
            <p className={style.parag}>Eigentlich, ich lerne die Programmierung seit fünf Jahre in Deutschland und seit zwei Jahre in Web-Entwicklung.Damit ich meine skills in Web-Entwicklung  verbessern könnte,habe ich die Kenntnisse Web-Entwicklung mit Projekten vertieft...</p>
           <a href="###" className={style.btn} onClick={() => { setAddedText( !isAdded ); }}>
            {`${!isAdded ? 'more' : 'less'}`}</a>
             {
            isAdded &&
            <p className={style.parag}>während dieser Kurse habe Figma-tool gelernt und ich lerne noch. Außerdem habe ich habe auch den wundarbaren Version-Controller-System : Git/ Github ,und Web-Libraries wie React gelernt</p>
            }
        </div>
        
       <AccordionPage  />  
         

        <div className={style['about-img']}>
            <img loading="lazy" src={AboutImg} alt="personal in different section"/>
        </div>
    </section>
      
  </div>
  )
}

export default AboutSec;