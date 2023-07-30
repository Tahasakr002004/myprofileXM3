import React, { useEffect,useState } from 'react'
import ReactDOM from 'react-dom'
 import style from './modal.module.css';
//  import classNames from 'classnames';

  


function ModalCheck({onClose,children,actionBar,cancelAction}) {
   


  useEffect( () => {
    document.documentElement.classList.add( 'overflow-hidden' );
    return () => {
      document.documentElement.classList.remove( 'overflow-hidden' );
    } 
  },[] );

  const modal =
    <div className={style['modal-container']}>
      <div className="fixed inset-0 bg-lime-950/25 flex items-center justify-center" onClick={cancelAction}>
        <div className={`${style['modal-box']} fixed  p-3 `}>
          <p className={style.parag}>{children}{actionBar}</p>
          <a href="###" className={style.btn} onClick={onClose}> OK</a>
        </div>
        </div>
    </div>;

  return ReactDOM.createPortal( <>{modal}</>,
    document.querySelector( '.modal-check-container' )
  );
}
export default ModalCheck;
