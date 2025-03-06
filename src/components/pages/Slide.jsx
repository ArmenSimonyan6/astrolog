import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypographyH3, TypographyP } from "../UI/typography";
import { reviews } from "../mocks/rewiewsData"; // Исправлено имя
import { ButtonOrange, ButtonSlick } from "../UI/button";
import ShadowScroll from "../UI/ShadowScroll";


const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ButtonSlick />,
    nextArrow: <ButtonSlick />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='row' id="reviews">
        <div className="wrapper">
          <TypographyH3 className="orange size-24">Отзывы</TypographyH3>
        </div>
      </div>

      <div className="row" style={{ padding: "16px 0" }}>
        <Slider {...settings}>
          {reviews.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-top">
                <img src={item.linkImg} alt={item.title} />
                <TypographyH3 className="size-18" style={{ padding: "30px 0" }}>{item.title}</TypographyH3>
              </div>
              <div className="card-bottom">
                <ShadowScroll className="scroll-160">
                  <TypographyP className="weight-500 size-18 height-235" style={{ textAlign: "left", textIndent: "7px" }}>{item.subTitle}</TypographyP>
                  <TypographyP className="weight-500 size-18 height-235" style={{ textAlign: "left", textIndent: "7px" }}>{item.subTitleTwo}</TypographyP>
                </ShadowScroll>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="row center padding-0">
        <div className="wrapper">
          <ButtonOrange className="size-18 weight-500" style={{ padding: "10px 20px", margin: "60px 0" }}>
            <a href="#consultation" style={{ padding: "3px 11px" }}>Запиасться на курс</a>
          </ButtonOrange>
        </div>
      </div>
    </>
  );
};

export default Slide;