import React,{ useEffect,useContext, useRef } from 'react'
import Typed from "typed.js";
import style from '../modules/homes.module.css';
import HomeImg from '../images/home.png';
import  '../../node_modules/boxicons/css/boxicons.css';
import Context from '../context/Context';
import classNames from 'classnames';

// <!-- home section design -->
function HomeSec () {
  const { isLightMode} = useContext( Context );
  const handleDownload1 = () => {
    // Replace the following URL with the URL of the file you want to download
    const fileUrl = 'https://github.com/Tahasakr002004/Lebenslauf_CV.git';
    window.open( fileUrl, '_blank' );
  };
  const handleDownload2 = () => {
    // Replace the following URL with the URL of the file you want to download
    const fileUrl = 'https://github.com/Tahasakr002004/Zeugnisse.git';
    window.open( fileUrl, '_blank' );
  };
  ///////////////typed.js///////////////////////
  // Create Ref element.
  const el = useRef( null );

  useEffect( () => {
    const typed = new Typed( el.current, {
      strings: [' Angewandte Informatiker', ' Frontend Entwickler', ' UI/UX Designer'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    } );


    // Destropying
    return () => {
      typed.destroy();
    };
  }, [] );

  
  const homeMode = `${isLightMode ? `${style.lightmode}` : ''}`;
  const mediaMode = `${isLightMode ? `${style.mediamode}` : ''}`;
  
  return (
    <div className= {homeMode}> 
      <section className={style.home} id="home">
        <div className={style['home-content']}>
          <h3>Hallo, mein Name is </h3>
          <h1>Taha</h1>
          <h3>Und ich bin<br/>
            <span ref={el} className={style['.multiple-text']}></span></h3>
          <p>Hallo zusammen, ich begrüße euch zu meiner Website,um meine Erfahrungen in SoftwareEntwicklung vorzustellen.</p><h3>let's Go</h3>
          <div className={ classNames(style['social-media'], mediaMode)}>
            <a href="###"><i className='bx bxl-github'></i></a>
            <a href="###"><i className='bx bxl-twitter'></i></a>
            <a href="###"><i className='bx bxl-instagram-alt'></i></a>
            <a href="###"><i className='bx bxl-linkedin'></i></a>
          </div>
          <a href="###" className={style.btn} onClick={handleDownload1}>Lebenslauf</a>
          <a href="###" className={style.btn} onClick={handleDownload2}> Zeugnisse </a>
        </div>

        <div className={style['home-img']}>
          <img src={HomeImg} alt="portfolio creator" />
        </div>
      </section>
    
    </div>
  )
};

export default HomeSec;