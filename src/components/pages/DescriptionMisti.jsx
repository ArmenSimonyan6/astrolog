import React from 'react'
import { TypographyH2, TypographyH3, TypographyP } from '../UI/typography'

const DescriptionMisti = () => {
    return (
        <div id='blog' className="row center text-center" style={{paddingTop: "59px", paddingBottom: "56px"}}>
            <div className="wrapper">
                <TypographyH2 className="size-50"><span className='orange weight-600'>Привет</span>, я Евгения Мисти<span className='orange'>.</span></TypographyH2>
                <TypographyP className="size-18" style={{ padding: "20px 0"}}>Для своих можно просто Женя. О чем вы сразу думаете, когда слышите слово “астролог”? Непонятные знаки и томный взгляд? Я не такая, потому что:</TypographyP>
            </div>
        </div>
    )
}

export default DescriptionMisti