import React from "react";

const imageTitle = {
    title: "WEDDING HALL",
    desc: "예식장은 신랑, 신부의 약속을 맺는 아름다운 장소입니다.",
};
const imageInfo = [
    {
        title: "야외 예식장",
        desc: "일반적으로 하는 실내 예식이 아닌, 야외 예식장도 주변 경관에 따라 더욱 아름답고 분위기 있는 선택이 될 수 있습니다.",
        imgClassName: "img1",
        btnClass: "image__btn",
        btnLink: "/",
    },
    {
        title: "실내 예식장",
        desc: "날씨에 구애받지 않고, 조명과 장식품의 배치에 따라 다양한 선택이 가능한 장점이 있습니다.",
        imgClassName: "img2",
        btnClass: "image__btn yellow",
        btnLink: "/",
    },
];
const ImageInfo = ({ title, desc, imgClassName, btnClass, btnLink }) => {
    return (
        <article className={`image ${imgClassName}`}>
            <h3 className="image__tit">{title}</h3>
            <p className="image__desc">{desc}</p>
            <a className={btnClass} href={btnLink} title="자세히 보기">
                자세히 보기
            </a>
        </article>
    );
};

function Image(props) {
    return (
        <section id="imageType" className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}>
            {/* imageTitle */}
            <h2>{imageTitle.title}</h2>
            <p>{imageTitle.desc}</p>
            <div className={`image__inner ${props.attr[2]}`}>
                {imageInfo.map((info, index) => (
                    <ImageInfo key={index} title={info.title} desc={info.desc} imgClassName={info.imgClassName} btnClass={info.btnClass} btnLink={info.btnLink} />
                ))}
                {/* <article className="image img1">
                    <h3 className="image__tit">야외 예식장</h3>
                    <p className="image__desc">일반적으로 하는 실내 예식이 아닌, 야외 예식장도 주변 경관에 따라 더욱 아름답고 분위기 있는 선택이 될 수 있습니다.</p>
                    <a className="image__btn" href="/" title="자세히 보기">
                        자세히 보기
                    </a>
                </article> */}
                {/* <article className="image img2">
                    <h3 className="image__tit">실내 예식장</h3>
                    <p className="image__desc">날씨에 구애받지 않고, 조명과 장식품의 배치에 따라 다양한 선택이 가능한 장점이 있습니다.</p>
                    <a className="image__btn yellow" href="/" title="자세히 보기">
                        자세히 보기
                    </a>
                </article> */}
            </div>
        </section>
    );
}

export default Image;
