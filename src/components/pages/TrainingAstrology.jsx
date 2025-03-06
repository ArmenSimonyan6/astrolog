import React from 'react'
import Player from '../images/image-icons/13.svg'
import { astrology } from '../mocks/astrology'
import { TypographyP } from '../UI/typography'
import ShadowScroll from '../UI/ShadowScroll'

const TrainingAstrology = ({ count, title, subTitile }) => {
  return (
    <div className='div-astrology' key={count}>
      <ShadowScroll className="scroll-170">
        <TypographyP className="size-18 weight-500" style={{ textIndent: "9px" }}>{title}</TypographyP>
        <TypographyP className="size-18 weight-500" style={{ paddingBottom: "37px", textIndent: "9px" }}>{subTitile}</TypographyP>
      </ShadowScroll>
    </div>
  )
}

export default TrainingAstrology