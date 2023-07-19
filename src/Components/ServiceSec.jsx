import React,{useState, useContext} from 'react'
import style from '../modules/services.module.css';
import Context from '../context/Context';
import classNames from 'classnames';




// <!-- services section design -->
function ServiceSec () {
    const [isAdded_f, setAddedText_f] = useState( false );
    const [isAdded_u, setAddedText_u] = useState( false );
    const { isLightMode } = useContext( Context );


    const homeMode = `${isLightMode ? `${style.lightmode}` : ''}`;


  return (
    <div className={style.container}>
      <section className={classNames( style.services, homeMode )} id="services">
        <h2 className={style.heading}>meine<span>Arbeit</span></h2>

        <div className={style['services-container']}>
          <div className={style['services-box']}>
            <i className='bx bx-code-alt'></i>
            <h3>Web Entwicklung</h3>
            <p className={style.parag}> WebEntwicklung ist zurzeit sehr wichtig,aber es ist auch nicht so einfach.Ich kann als Frontend-Entwickler voll responsive/interaktive Website.</p>
            <a href="###" className={style.btn} onClick={() => { setAddedText_f( !isAdded_f ); }}>
            {`${!isAdded_f ? 'more' : 'less'}`}</a>
             {
            isAdded_f &&
            <p className={style.parag}>Ich habe die neuen Web-Tech wie REACT, um full funktional realle Anwendungen zu entwickeln</p>
            }
          </div>

          <div className={style['services-box']}>
            <i className='bx bxs-paint'></i>
            <h3>UX Gestaltung</h3>
            <p className={style.parag}>UX ist in allgemeine Software-Entwicklung wesentliches Ziel besonders in Web-Entwicklung.Es hängt davon ab,wie zufrieden der Benutzer mit Website</p>
           <a href="###" className={style.btn} onClick={() => { setAddedText_u( !isAdded_u); }}>
            {`${!isAdded_u ? 'more' : 'less'}`}</a>
             {
            isAdded_u &&
            <p className={style.parag}>Ich kenne schon aus UX und seine Technologien und Tools wie 'user Story'/'competitive Audits'/'Figma'.</p>
            }
          </div>

         
        </div>
      </section>
    
    </div>
  )
};

export default ServiceSec;