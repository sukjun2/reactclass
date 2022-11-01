import React from "react";

function Banner({ attr }) {
    return (
        <section id="bannerType" className={`banner__wrap ${attr[0]} ${attr[1]}`}>
            <h2 className="blind">배너 영역</h2>
            <div className="banner__inner">
                <h3 className="title">WEDDING</h3>
                <p className="desc">
                    There is a lot of pressure to get married during Chuseok
                    <br />I won't be able to remain mentally.
                    <a href="https://sukjun2.tistory.com/" title="티스토리로 이동">
                        https://sukjun2.tistory.com/
                    </a>
                </p>
                <span className="small">추석은 압박의 명절</span>
            </div>
        </section>
    );
}

export default Banner;
