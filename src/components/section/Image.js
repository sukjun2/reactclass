import React from "react";

function Image(props) {
    return (
        <section id="imageType" className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}>
            <h2>WEDDING HALL</h2>
            <p>예식장은 신랑, 신부의 약속을 맺는 아름다운 장소입니다.</p>
            <div className={`image__inner ${props.attr[3]}`}>
                <article className="image img1">
                    <h3 className="image__tit">야외 예식장</h3>
                    <p className="image__desc">일반적으로 하는 실내 예식이 아닌, 야외 예식장도 주변 경관에 따라 더욱 아름답고 분위기 있는 선택이 될 수 있습니다.</p>
                    <a className="image__btn" href="/" title="자세히 보기">
                        자세히 보기
                    </a>
                </article>
                <article className="image img2">
                    <h3 className="image__tit">실내 예식장</h3>
                    <p className="image__desc">날씨에 구애받지 않고, 조명과 장식품의 배치에 따라 다양한 선택이 가능한 장점이 있습니다.</p>
                    <a className="image__btn yellow" href="/" title="자세히 보기">
                        자세히 보기
                    </a>
                </article>
            </div>
        </section>
    );
}

export default Image;
