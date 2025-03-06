import React from 'react'
import ArrowLeft from '../images/button-slicks/Vector (6).svg'
import ArrowRight from '../images/button-slicks/Vector (7).svg'
import Player from '../images/image-icons/13.svg'
import { TypographyH2, TypographyH3, TypographyP } from '../UI/typography'
import { ButtonSlick } from '../UI/button'
import ImageToggle from './ImageClick'
import ShadowScroll from '../UI/ShadowScroll'

const AboutServices = () => {
    return (
        <section>
            <div className='row align-center text-center bottom-50' style={{ maxWidth: "890px", paddingBottom: "88px" }}>
                <div className="wrapper arrows" style={{ padding: "0 14px" }}>
                    <div className="icon-left">
                        <ButtonSlick>
                            <div className='arrow-left' >
                                <img src={ArrowLeft} alt="" />
                            </div>
                        </ButtonSlick>
                    </div>
                </div>
                <div className="wrapper box-shadow-radius" style={{ maxWidth: "280px", padding: "25px" }}>
                    <TypographyH2 className="size-24" style={{ marginBottom: "20px" }}>Иван Иванович, Москва</TypographyH2>
                    <ShadowScroll>
                        <TypographyP className="size-18 weight-500" style={{ textAlign: "left", textIndent: "22px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</TypographyP>
                        <TypographyP className="size-18 weight-500" style={{ textAlign: "left", textIndent: "22px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</TypographyP>
                    </ShadowScroll>
                </div>
                <div className="wrapper black-video">
                    <div className="image__youtube-black">
                        <div className='player'>
                            <ImageToggle />
                        </div>
                    </div>
                </div>
                <div className="wrapper arrows" style={{ padding: "0 14px" }}>
                    <div className="icon-right">
                        <ButtonSlick>
                            <div className='arrow-right'>
                                <img src={ArrowRight} alt="" />
                            </div>
                        </ButtonSlick>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutServices