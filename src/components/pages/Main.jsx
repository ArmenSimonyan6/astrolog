import React from 'react'
import DescriptionMisti from './DescriptionMisti'
import ListNumbers from './ListNumbers'
import PersonalLife from './PersonalLife'
import { priceCourses } from '../mocks/priceCoursesData'
import { mockBenefitsData } from '../mocks/mockBenefitsData'
import { articles } from '../mocks/articlesData'
import ArticlesData from './ArticlesData'
import Slide from './Slide'
import { TypographyH2, TypographyH3, TypographyP } from '../UI/typography'
import personalLife from '../images/image-icons/Vector (8).svg'
import businnesAndWork from '../images/image-icons/Vector (9).svg'
import BusinessAndWork from './BusinnesAndWork'
import AboutServices from './AboutServices'
import UsefulMaterial from './UsefulMaterial'
import TrainingAstrology from './TrainingAstrology'
import { astrology } from '../mocks/astrology'
import ImageToggle from './ImageClick'

const Main = () => {
    return (
        <main>

            {/* DescriptionMisti START /////////////// */}
            <section style={{ display: "block", background: "#FFFFFF" }}>
                <DescriptionMisti />
            </section>
            {/* /////////////// */}


            {/* ListNumbers START /////////////// */}
            <section style={{ display: "block", background: "#FFFFFF", paddingBottom: "35px"}}>
                <div className='row row__list-numbers' style={{maxWidth: "1170px"}}>
                    {mockBenefitsData.map((item) => <ListNumbers key={item.count} count={item.count} title={item.title} subTitle={item.subTitle} />)}
                </div>

                <div className="row center text-center">
                    <div className="wrapper">
                        <TypographyH3 className="size-24">Я меняю жизни людей, не давая им изменить своим принципам.</TypographyH3>
                        <TypographyP className="size-18 padding-10" style={{ padding: "20px 0" }}>За это мне доверяют. За это я люблю астрологию.</TypographyP>
                        <div className='border center'></div>
                    </div>
                </div>
                <div className="row center" style={{ paddingTop: "90px" }}>
                    <div className="wrapper">
                        <TypographyH2 className=" weight-700 size-36"><span className='orange weight-700'>Услуги</span> и цены<span className='orange'>.</span></TypographyH2>
                    </div>
                </div>
            </section>
            {/* /////////////// */}




            {/* PersonalLife START /////////////// */}
            <section style={{ display: "block", background: '#EDEDED' }}>
                <div className="row center" style={{ paddingTop: "50px" }}>
                    <div style={{ 'display': "flex", "alignItems": "center", padding: "0 5px" }}>
                        <picture >
                            <img src={personalLife} alt="" />
                        </picture>
                    </div>
                    <TypographyP className="weight-700 size-24">
                        Личная жизнь
                    </TypographyP>
                </div>
                <div className='row gap-35' style={{ display: 'flex', flexWrap: "wrap", gap: "40px", padding: "78px 0", maxWidth: "1170px" }}>
                    {priceCourses.map((item) => <PersonalLife key={item.count} title={item.title} count={item.count} price={item.price} subTitle={item.subTitle} subTitleTwo={item.subTitleTwo} />)}
                </div>
            </section>
            {/* /////////////// */}


            {/* BusinessAndWork START /////////////// */}
            <section style={{ display: "block", background: "#DEE3FF" }}>
                <div className="row center" style={{ paddingTop: "70px" }}>
                    <div style={{ 'display': "flex", "alignItems": "center", padding: "0 5px" }}>
                        <picture >
                            <img src={businnesAndWork} alt="" />
                        </picture>
                    </div>
                    <TypographyP className="weight-700 size-24">
                        Бизнес и работа
                    </TypographyP>
                </div>

                <div className='row gap-35' style={{ display: 'flex', flexWrap: "wrap", gap: "40px", padding: "78px 0", maxWidth: "1170px" }}>
                    {priceCourses.map((item) => <BusinessAndWork key={item.count} title={item.title} count={item.count} price={item.price} subTitle={item.subTitle} subTitleTwo={item.subTitleTwo} />)}
                </div>
            </section>
            {/* /////////////// */}



            {/* AboutServices START /////////////// */}
            <section style={{ display: "block", background: "#DFDFDF" }}>
                <div className="row center" style={{padding: "50px 0"}}>
                    <div className="wrapper">
                        <TypographyH2 className="size-36 weight-700"><span className='orange weight-700'>Отзывы</span> об услугах</TypographyH2>
                    </div>
                </div>
                <AboutServices />
            </section>
            {/* /////////////// */}


            {/* TrainingAstrology START /////////////////////////////////////////////// */}
            <section style={{ display: "block", background: "#FFFFFF" }}>

                <div className="row center" style={{padding: "50px 0"}}>
                    <div className="wrapper">
                        <TypographyH2 className="size-36 weight-700"><span className='orange weight-700'>Обучение</span> астрологии<span className='orange weight-700'>.</span></TypographyH2>
                    </div>
                </div>
                <div className="row gap-articles" style={{flexWrap: "wrap", gap: "95px", paddingTop: "20px", paddingBottom: "110px"}}>
                    <div className="wrapper">
                        <div className="picture-one" style={{ marginBottom: "60px" }}>
                            <div className='player'>
                                <ImageToggle />
                            </div>
                        </div>
                        <div className="picture-one" style={{ marginTop: "60px" }}>
                            <div className='player'>
                                <ImageToggle />
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        {astrology.map((item) => <TrainingAstrology key={item.count} title={item.title} subTitile={item.subTitle} />)}
                    </div>
                </div>
            </section>
            {/* /////////////////////////////////////////// */}



            {/* Slide START /////////////////////// */}
            <section style={{ display: "block", background: '#FFFFFF' }}>
                <Slide />
            </section>
            {/* //////////////////////////////// */}


            {/* ArticlesData START //////////////////// */}
            <section id='articlesData' style={{ display: "block", background: '#F5F5F5' }}>
                <div className="row center" style={{ paddingTop: "50px" }}>
                    <div className="wrapper">
                        <TypographyH2 className="size-36 weight-700"><span className='orange weight-700'>Статьи</span>, которые вам понравятся<span className='orange weight-700'>.</span></TypographyH2>
                    </div>
                </div>
                <div className='row gap-30' style={{ display: "flex", flexWrap: "wrap", padding: "79px 0" }}>
                    {articles.map((item) => <ArticlesData key={item.count} title={item.title} date={item.date} subTitle={item.subTitle} paragraph={item.paragraph} />)}
                </div>
            </section>
            {/* /////////////////////////////////// */}



            {/*UsefulMaterial START ///////////// */}
            <section id='usefulMaterial' style={{display: "block"}}>
                <UsefulMaterial />
            </section>
            {/* ////////////// */}

        </main>
    )
}

export default Main