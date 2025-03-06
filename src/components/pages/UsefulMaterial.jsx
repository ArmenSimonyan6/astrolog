import React from 'react'
import { TypographyH2, TypographyP } from '../UI/typography'
import Player from '../images/image-icons/13.svg'
import ImageToggle from './ImageClick'

const UsefulMaterial = () => {
    return (
        <div className='row'>
            <div className="wrapper black-video" style={{padding: "77px", background: "white",margin: "0 auto"}}>
                <div>
                    <TypographyH2 className='size-36'><span className='orange weight-700'>Полезный</span> материал<span className='orange'>.</span></TypographyH2>
                    <TypographyP className="weight-600 size-24" style={{padding: "25px 0"}}>Как самостоятельно построить натальную карту</TypographyP>
                </div>
                <div className="image__youtube-black2">
                    <div className='player'>
                        <ImageToggle/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsefulMaterial