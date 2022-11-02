import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderInfo = {
    title: "BLESSING",
    titleSub: "WEDDING SEASON",
    desc: "웨딩 시즌이 다가왔어요! 9월부터 시작해서 10월, 11월에도! 결혼식이 너무 많아서 지갑이 점점 가벼워지네요!",
    btn1: "자세히 보기",
    btn2: "사이트 보기",
};

function Slider(props) {
    return (
        <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
            <div className="slider__inner">
                <Swiper autoplay={{ delay: 2000, disableOnInteraction: false }} navigation={true} pagination={{ clickable: true }} modules={[Autoplay, Navigation, Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className="swiper-slide img1">
                            <div className="desc">
                                <span>{sliderInfo.title}</span>
                                <h3>{sliderInfo.titleSub}</h3>
                                <p>{sliderInfo.desc}</p>
                                <div className="btn">
                                    <a href="/">{sliderInfo.btn1}</a>
                                    <a href="/" className="black">
                                        {sliderInfo.btn2}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide img2">
                            <div className="desc">
                                <span>{sliderInfo.title}</span>
                                <h3>{sliderInfo.titleSub}</h3>
                                <p>{sliderInfo.desc}</p>
                                <div className="btn">
                                    <a href="/">{sliderInfo.btn1}</a>
                                    <a href="/" className="black">
                                        {sliderInfo.btn2}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide img3">
                            <div className="desc">
                                <span>{sliderInfo.title}</span>
                                <h3>{sliderInfo.titleSub}</h3>
                                <p>{sliderInfo.desc}</p>
                                <div className="btn">
                                    <a href="/">{sliderInfo.btn1}</a>
                                    <a href="/" className="black">
                                        {sliderInfo.btn2}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Slider;
