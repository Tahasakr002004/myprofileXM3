import React from 'react';
// import ReactDOM from 'react-dom/client';
// import style from './modules/style.module.css';
import HeaderSec from './Components/HeaderSect';
import HomeSec from './Components/HomeSec';
import AboutSec from './Components/AboutSec';
import ServiceSec from './Components/ServiceSec';
import PortfolioSec from './Components/PortfolioSec';
import ContactSec from './Components/ContactSec';
import FooterSec from './Components/FooterSec';
const App = () => {

  return (
    <div>
      <HeaderSec/>
      <HomeSec/>
      <AboutSec/>
      <ServiceSec/>
      <PortfolioSec/>
      <ContactSec/>
      <FooterSec/>
    </div>
      
  );
};


export default App;
