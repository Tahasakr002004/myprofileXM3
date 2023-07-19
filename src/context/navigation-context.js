import { createContext,useState,useEffect } from 'react';



const NavigationContext = createContext();


const NavigationProvider = () => {


  const [currentPath, setCurrentPath] = useState( window.location.pathname );
/// when user click backandforward popstate arrow on side be addressbar 
  useEffect( ( () => {
    const handler = () => {
      
      setCurrentPath( window.location.pathname );
      
    }

    window.addEventListener( 'popstate', handler );
    return () => {
      window.removeEventListener( 'popstate', handler );
    }
  }), [] );


  const navigate = ( to ) => {
    window.history.pushState( {}, '', to );
    setCurrentPath( to );
  }

  return <NavigationContext.Provider value={{navigate , currentPath}}>
    <button onClick={() => navigate('/accordion')}> go to accordion</button>
      {currentPath}
      {children}
  </NavigationContext.Provider>;
};


export { NavigationProvider };
export default NavigationContext;