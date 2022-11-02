import React from "react";

function ImageText({ attr }) {
    return (
        <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}>
            <h2 className="blind">유용한 사이트 살펴보기</h2>
            <div className={`imgText__inner ${attr[4]}`}>
                <div className="imgText__txt">
                    <span>WEDDING DRESS SITE</span>
                    <h3>WEDDING DRESS</h3>
                    <p>신랑, 신부님의 턱시도 / 드레스 or 한복을 볼 수 있는 사이트입니다.</p>
                    <ul>
                        <li>
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
                        </li>
                    </ul>
                </div>
                <div className="imgText__img img1">
                    <a href="/">드레스 사이트</a>
                </div>
                <div className="imgText__img img2">
                    <a href="/" className="blue">
                        턱시도 사이트
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ImageText;
