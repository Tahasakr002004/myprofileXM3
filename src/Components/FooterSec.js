import React from 'react'
import style from '../modules/footers.module.css';

//  <!-- footer design -->
function FooterSec() {
  return (
    <div>
    <footer className={style.footer}>
        <div className={style['footer-text']}>
            <p>Copyright &copy; 2023 by Taha Elsayed | All Rights Reserved.</p>
        </div>

        <div className={style['footer-iconTop']}>
            <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
    </footer>

    
    </div>
  )
}

export default FooterSec