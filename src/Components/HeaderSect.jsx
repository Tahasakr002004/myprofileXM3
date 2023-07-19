import React,{useState , useContext} from 'react'
import style from '../modules/headers.module.css';
import '../../node_modules/boxicons/css/boxicons.css'
import logoImg from '../images/Logos/TahaLogo.svg';
import Context from '../context/Context';

/////////////////////



// ّ// <!-- header design -->
function HeaderSect () {
  const { isLightMode, changeMode } = useContext( Context );
  const [activeButton, setActiveButton] = useState( null );
  const [clicked, setClicked] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  
  // Function to handle the click event
  const handleClick = () => {
    setClicked(!clicked);
  };

  //// ToggleDarkMode
  function toggleMode() {
    changeMode();
  }
  
  const menuIcon = clicked ? `bx-x bx bx-menu ${style['bx-x']}` : `bx bx-menu ${style['menu-icon']}`;
  const menuNav = clicked ? `${style.active} ${style.navbar}` : `${style.navbar}`;
   
  return (

    <header className={style.header}>
        <div className={style.logo}>
           <img src={logoImg} alt="logo of taha" />
            <div className={isLightMode ? "moon" : "sun"} onClick={toggleMode}>
               <i className={isLightMode ? `bx bxs-moon bx-md ${style.darkicon}` :
            `bx bxs-sun bx-md  ${style.lighticon}`}></i>
          </div>
        </div>
     
        
          <div  className={menuIcon} onClick={handleClick}></div>
          <nav className={menuNav}>  
            <a href="#home" className={ `${activeButton === 1 ? style.active : ''}`} onClick={() => handleButtonClick(1)}>Start</a>
            <a href="#about" className={ `${activeButton === 2 ? style.active : ''}`} onClick={() => handleButtonClick(2)} >Infos</a>
            <a href="#services" className={ `${activeButton === 3 ? style.active : ''}`} onClick={() => handleButtonClick(3)} >Dienst</a>
            <a href="#portfolio" className={ `${activeButton === 4 ? style.active : ''}`} onClick={() => handleButtonClick(4)}>Portfolio</a>
            <a href="#contact" className={`${activeButton === 5 ? style.active : ''}`} onClick={() => handleButtonClick( 5 )}>Kontakt</a>
          </nav>
        
       
    </header>
    
  );
};

export default HeaderSect;