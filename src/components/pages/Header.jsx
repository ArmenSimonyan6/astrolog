import React, { useEffect, useState } from 'react'
import gmailIcon from '../images/image-icons/Vector (4).svg'
import telIcon from '../images/image-icons/Vector (5).svg'
import circle from '../images/image-icons/Rectangle (1).svg'
import { ButtonOrange } from '../UI/button'
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (sectionId) => {
    setIsOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  };

  if(isOpen) {
    document.body.classList.add("no-scroll")
  } else{
    document.body.classList.remove("no-scroll")
  }

  return (
    <header id='home'>
      <nav>
        <div className="navbar__header" style={{ padding: "15px 0"}}>
          <div className="row" style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap" }}>
            <div className='none' style={{ "whiteSpace": "nowrap", "display": "flex", alignItems: 'center' }}>
              <div className='icons' style={{ 'display': "flex", "alignItems": "center", padding: "0 8px" }}>
                <picture >
                  <img src={gmailIcon} alt="" />
                </picture>
              </div>
              <div>
                <span className='size-18'>
                  <a href="mailto:evgeniya@astro-mist.ru">
                    evgeniya@astro-mist.ru
                  </a>
                </span>
              </div>

              <div className='icons' style={{ 'display': "flex", "alignItems": "center", padding: "0 7px", marginLeft: "35px" }}>
                <picture >
                  <img src={telIcon} alt="" />
                </picture>
              </div>
              <div>
                <span className='size-18'>
                  <a href="tel:+88005553535">8 800 555 35-35</a>
                </span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ paddingRight: "63px" }}>
                <ul className='ul__black' style={{ "display": "flex" }}>
                  <li><a href="#home">ГЛАВНАЯ</a></li>
                  <li><a href="#blog">БЛОГ</a></li>
                  <li><a href="#reviews">ОТЗЫВЫ</a></li>
                </ul>
              </div>
              <div style={{ whiteSpace: "nowrap", alignItems: "center", display: "flex"}}>
                <div className='padding__circle' style={{alignItems: "center", display: "flex"}}>
                  <img src={circle} alt="" />
                </div>

                <div className='padding__circle' style={{alignItems: "center", display: "flex"}}>
                  <img src={circle} alt="" />
                </div>

                <div className='padding__circle' style={{alignItems: "center", display: "flex"}}>
                  <img src={circle} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className={`hamburger-menu ${isOpen ? "open" : ""}`} style={{ display: "none" }}>
            <div className={`menu__btn`} onClick={() => {setIsOpen(!isOpen)}}>
              <span></span>
            </div>

            <ul className="menu__box">
              <li><a className="menu__item" onClick={() => handleMenuClick("home")}>ГЛАВНАЯ</a></li>
              <li><a className="menu__item" onClick={() => handleMenuClick("blog")}>БЛОГ</a></li>
              <li><a className="menu__item" onClick={() => handleMenuClick("reviews")}>ОТЗЫВЫ</a></li>
            </ul>
          </div>

        </div>
      </nav>
      <section className='header' style={{display: "block"}}>
        <div className='row'>
          <div className="wrapper">
            <h2 className='size-72' style={{ "maxWidth": "500px" }}>ЕВГЕНИЯ МИСТИ</h2>
            <p className='size-24' style={{ "padding": "20px 0px" }}>АСТРОЛОГ ПСИХОЛОГ</p>
            <ButtonOrange className="button-header size-18">
              <a href="#consultation">Заказать консультацию</a>
            </ButtonOrange>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header