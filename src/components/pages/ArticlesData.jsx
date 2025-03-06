import React, { useState } from 'react'
import { TypographyH3, TypographyP } from '../UI/typography'

const ArticlesData = ({ count, title, date, subTitle }) => {



    const fullText = `${subTitle}`

    const maxWords = 8;
    const shortText = fullText.split(' ').slice(0, maxWords).join(' ');
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [buttonText, setButtonText] = useState('Подробнее');

    const toggleContent = () => {
        setTimeout(() => {
            setIsContentVisible(prevState => !prevState);
            setButtonText(prevState => (prevState === 'Подробнее' ? 'Скрыть' : 'Подробнее'));
        }, 0);
    };

    return (
        <div key={count} className='wrapper list-articles box-shadow' style={{ maxWidth: "296px" }}>
            <TypographyH3 className="size-24">{title}</TypographyH3>
            <div className='border' style={{ margin: "15px 0 10px 0" }}></div>
            <div className="size-18 weight-500">{date}</div>
            <TypographyP className="size-18 weight-500 text-base-articlesData" style={{ paddingTop: "21px" }}>
                {isContentVisible ? fullText : shortText} {!isContentVisible && <span className='orange weight-700'>...</span>}
            </TypographyP>

            <TypographyP className="orange">
                <button onClick={toggleContent} className="size-18 weight-600 orange button-articlesData">{buttonText}</button>
            </TypographyP>
        </div>
    )
}

export default ArticlesData