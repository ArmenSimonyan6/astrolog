import React from 'react'
import { TypographyH3, TypographyP } from '../UI/typography'

const ListNumbers = ({ count, title, subTitle }) => {

    return (
        <div key={count} className="wrapper list-numbers">
            <div className="benefit-item">
                <div className="circle" style={{marginBottom: "28px"}}>
                    <p className='size-48 weight-700'>{count}</p>
                </div>
                <TypographyH3 style={{marginBottom: "10px"}} className="weight-600 size-24">
                    {title}
                </TypographyH3>
                <TypographyP className="size-18 weight-500 max-160">
                    {subTitle}
                </TypographyP>
            </div>
        </div>
    )
}

export default ListNumbers