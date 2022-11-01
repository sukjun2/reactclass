import React from "react";

const imagetextTitle = {
    title: "유용한 사이트 살펴보기",
    titleSub1: "WEDDING DRESS SITE",
    titleSub2: "WEDDING DRESS",
    desc: "신랑, 신부님의 턱시도 / 드레스 or 한복을 볼 수 있는 사이트입니다.",
};
const imagetextInfo = [
    {
        link: "/",
        site: "드레스 사이트",
    },
    {
        link: "/",
        site: "턱시도 사이트",
    },
    {
        link: "/",
        site: "한복 사이트",
    },
    {
        link: "/",
        site: "드레스 사이트2",
    },
    {
        link: "/",
        site: "턱시도 사이트2",
    },
    {
        link: "/",
        site: "한복 사이트2",
    },
];
const ImagetextInfo = ({ link, site }) => {
    return (
        <li>
            <a href={link}>{site}</a>
        </li>
    );
};
const imagetextImg = [
    {
        className: "img1",
        className2: "",
        site: "드레스 사이트",
    },
    {
        className: "img2",
        className2: "blue",
        site: "턱시도 사이트",
    },
];
const ImagetextImg = ({ className, className2, site }) => {
    return (
        <div className={`imgText__img ${className}`}>
            <a href="/" className={className2}>
                {site}
            </a>
        </div>
    );
};

function ImageText({ attr }) {
    return (
        <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}>
            <h2 className="blind">{imagetextTitle.title}</h2>
            <div className={`imgText__inner ${attr[4]}`}>
                <div className="imgText__txt">
                    <span>{imagetextTitle.titleSub1}</span>
                    <h3>{imagetextTitle.titleSub2}</h3>
                    <p>{imagetextTitle.desc}</p>
                    <ul>
                        {imagetextInfo.map((info, index) => (
                            <ImagetextInfo key={index} link={info.link} site={info.site} />
                        ))}
                        {/* <li>
                            <a href="/">드레스 사이트</a>
                        </li>
                        <li>
                            <a href="/">턱시도 사이트</a>
                        </li>
                        <li>
                            <a href="/">한복 사이트</a>
                        </li>
                        <li>
                            <a href="/">드레스 사이트2</a>
                        </li>
                        <li>
                            <a href="/">턱시도 사이트2</a>
                        </li>
                        <li>
                            <a href="/">한복 사이트2</a>
                        </li> */}
                    </ul>
                </div>
                {imagetextImg.map((info, index) => (
                    <ImagetextImg key={index} className={info.className} className2={info.className2} site={info.site} />
                ))}
                {/* <div className="imgText__img img1">
                    <a href="/">드레스 사이트</a>
                </div>
                <div className="imgText__img img2">
                    <a href="/" className="blue">
                        턱시도 사이트
                    </a>
                </div> */}
            </div>
        </section>
    );
}

export default ImageText;
