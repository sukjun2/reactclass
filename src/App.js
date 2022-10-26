import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
// import = include와 동일

function App() {
    return (
        <>
            {/* 한번에 여러개의 태그가 들어갈 수 없어서 하나의 박스(<>)로 묶어줌 */}
            <Header fonts="nexon" />
            <Main>
                <Slider fonts="nexon" />
                <Image attr={["section", "nexon", "container"]} />
                <ImageText attr={["nexon", "section", "gray", "parallax", "container"]} />
                <Card attr={["nexon", "section", "parallax", "container"]} />
                <Banner attr={["nexon", "parallax"]} />
                <Text attr={["nexon", "section", "parallax", "container"]} />
            </Main>
            <Footer attr={["nexon", "section", "gray", "container"]} />
        </>
    );
}

export default App;
