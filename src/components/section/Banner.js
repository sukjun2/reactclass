import React from "react";

const bannerTitle = {
    title: "배너 영역",
};
const bannerInfo = {
    title: "WEDDING",
    desc: "There is a lot of pressure to get married during Chuseok I won't be able to remain mentally.",
    link: "https://sukjun2.tistory.com/",
    linkText: "https://sukjun2.tistory.com/",
    small: "추석은 압박의 명절",
};

function Banner({ attr }) {
    return (
        <section id="bannerType" className={`banner__wrap ${attr[0]} ${attr[1]}`}>
            <h2 className="blind">{bannerTitle.title}</h2>
            <div className="banner__inner">
                <h3 className="title">{bannerInfo.title}</h3>
                <p className="desc">
                    {bannerInfo.desc}
                    <a href={bannerInfo.link} title="티스토리로 이동">
                        {bannerInfo.linkText}
                    </a>
                </p>
                <span className="small">{bannerInfo.small}</span>
            </div>
        </section>
    );
}

export default Banner;
