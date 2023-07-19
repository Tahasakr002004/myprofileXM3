import { createContext, useState } from 'react';

const Context = createContext();

const Provider = ( { children } ) => {
 const [isLightMode, setIsLightMode] = useState(false);
  
 
 const valueToShare = {
   isLightMode: isLightMode,
   //// ToggleDarkMode
   changeMode : () => {
    setIsLightMode( ( prevMode ) => !prevMode );
    
  }

 }
  
  return (
    <Context.Provider value={valueToShare}>
        {children}
    </Context.Provider>
  );
};

export { Provider };
export default  Context;