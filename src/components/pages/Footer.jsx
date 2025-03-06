import React from 'react'
import circle from '../images/image-icons/Rectangle.svg'
import gmailIcon from '../images/image-icons/Vector (1).svg'
import telIcon from '../images/image-icons/Vector (3).svg'
import { TypographyH2, TypographyP } from '../UI/typography'
import Form from '../UI/form'

const Footer = () => {
  return (
    <footer>
      <section id='consultation' className='footer'>
        <div className="row" style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-around", "flexWrap": "wrap", textAlign: "center" }}>
          <div className="wrapper footer-wrapper">
            <TypographyH2 className="footer-title size-48" style={{ padding: "20px 0" }}>ПРЯМО СЕЙЧАС</TypographyH2>
            <TypographyP className="footer-subTitle size-36">Получите быструю консультацию по любым вашим вопросам.</TypographyP>
          </div>
          <div className="wrapper footer-question" style={{ position: "relative" }}>
            <span className='size-18 span-black' style={{ display: "flex", color: 'black', width: "100%", whiteSpace: "nowrap", position: "absolute", top: "-9%", left: "0", justifyContent: "center" }}>Опишите вашу проблему..</span>

            <TypographyH2 className="size-36 weight-500">Задайте свой вопрос</TypographyH2>
            <TypographyP className="size-18 weight-400" style={{ padding: "5px 0", paddingBottom: "13px" }}>и я проконсультирую вас по вашей проблеме</TypographyP>
            <Form />
          </div>
        </div>

      </section>
      <nav>
        <div className="navbar__footer">
          <div className="row" style={{ "background": "black", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "color": "white" }}>
            <div>
              <div style={{ "whiteSpace": "nowrap", "display": "flex", alignItems: 'center' }}>
                <div className='icons' style={{ 'display': "flex", "alignItems": "center", padding: "0 8px" }}>
                  <picture >
                    <img src={gmailIcon} alt="" />
                  </picture>
                </div>
                <div>
                  <span className='size-18'>
                    <a href="mailto:evgeniya@astro-mist.ru">evgeniya@astro-mist.ru</a>
                  </span>
                </div>

                <div className='icons' style={{ 'display': "flex", "alignItems": "center", padding: "0 8px", marginLeft: "35px" }}>
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
            </div>

            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ paddingRight: "63px" }}>
                <ul className="ul__white" style={{ "display": "flex" }}>
                  <li><a href="#home">ГЛАВНАЯ</a></li>
                  <li><a href="#blog">БЛОГ</a></li>
                  <li><a href="#reviews">ОТЗЫВЫ</a></li>
                </ul>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <picture className='padding__circle'>
                  <img src={circle} alt="" />
                </picture>

                <picture className='padding__circle'>
                  <img src={circle} alt="" />
                </picture>

                <picture className='padding__circle'>
                  <img src={circle} alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer