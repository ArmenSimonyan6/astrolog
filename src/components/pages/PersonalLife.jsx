import React from 'react'
import { TypographyH2, TypographyP } from '../UI/typography'
import { ButtonOrange, ButtonSlick } from '../UI/button'
import ArrowLeft from "../images/button-slicks/Vector (6).svg"
import ArrowRight from "../images/button-slicks/Vector (7).svg"
import Player from '../images/image-icons/13.svg'
import ImageToggle from './ImageClick'
import ShadowScroll from '../UI/ShadowScroll'

const PersonalLife = ({ count, title, subTitle, price, subTitleTwo }) => {
    return (
        <div key={count} className="wrapper list-vidos" style={{ background: "white" }}>
            <div style={{ "maxWidth": "565px" }}>
                <div className='padding-18' style={{ padding: "28px" }}>
                    <TypographyH2 className="size-36">{title}</TypographyH2>
                    <div className='border center' style={{ width: "87px", marginTop: "14px", marginBottom: "14px" }}></div>
                    <ShadowScroll className="scroll-90">
                        <TypographyP className="size-18 weight-500" style={{ textAlign: "left", textIndent: "9px" }}>{subTitle}</TypographyP>
                        <TypographyP className="size-18 weight-500" style={{ textAlign: "left", textIndent: "9px" }}>{subTitleTwo}</TypographyP>
                    </ShadowScroll>
                </div>
                <div className='youtube-video between'>
                    <ButtonSlick>
                        <div className='arrow-left'>
                            <img src={ArrowLeft} alt="" />
                        </div>
                    </ButtonSlick>
                    <div className='player'>
                        <ImageToggle />
                    </div>
                    <ButtonSlick>
                        <div className='arrow-right'>
                            <img src={ArrowRight} alt="" />
                        </div>
                    </ButtonSlick>
                </div>
                <ButtonOrange className="button-price weight-700 size-36" style={{ border: "none" }}>{price}</ButtonOrange>
            </div>
        </div>
    )
}

export default PersonalLife