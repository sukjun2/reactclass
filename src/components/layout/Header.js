import React from "react";

function Header(props) {
    return (
        <header id="headerType" className={`header__wrap ${props.fonts}`}>
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">
                        WEDDING <em>SEASON</em>
                    </a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <li>
                            <a href="#imageType">HALL</a>
                        </li>
                        <li>
                            <a href="#imgTextType">DRESS</a>
                        </li>
                        <li>
                            <a href="#cardType">MAKE UP</a>
                        </li>
                        <li>
                            <a href="#bannerType">INFORMATION</a>
                        </li>
                        <li>
                            <a href="#textType">CHECKLIST</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__member">
                    <a href="/">로그인</a>
                </div>
                <div className="header__ham">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;
