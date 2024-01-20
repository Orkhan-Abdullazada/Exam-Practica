import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer__all'>
     <div className='footer__top'>
     <div className='footer__left'>
        <div className='footer__left__right'>
        <img src="https://preview.colorlib.com/theme/startup2/img/logo.png.webp" alt="" />
        </div>
        <div className='footer__left__right'>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>PortFolio</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
        </div>
      </div>
      <div className="footer__right">
        <ul>
          <li><div className='icon'><i class="fa-brands fa-facebook"></i></div></li>
          <li><div className='icon'><i class="fa-brands fa-twitter"></i></div></li>
          <li><div className='icon'><i style={{backgroundColor:"black"}} class="fa-brands fa-instagram"></i></div></li>
          <li><div className='icon'><i class="fa-brands fa-linkedin"></i></div></li>
          
        </ul>
      </div>
     </div>
     <div className='foo'></div>
     <div className='footer__bottom'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</div>
    </div>
  )
}

export default Footer
