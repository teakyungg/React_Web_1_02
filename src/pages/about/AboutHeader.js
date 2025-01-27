import TextDisplay from "../../modules/display/TextDisplay";

function AboutHeader({ smallBox_title, smallBox_txt, background_img }) {

    // 만든 모듈 사용 (받은 텍스트를 컴포넌트를 사용해서 box_txt라는 변수에 할당)
    let box_txt = <TextDisplay className={'About_Header_box'} title={smallBox_title} content={smallBox_txt}/>

    return <Render box_txt={box_txt} background_img={background_img}/>
}

function Render({ box_txt , background_img}) {
    return (
        <div className="About_Header">
            <div style={{ backgroundImage: `url(${background_img[0]})` }}>
                {box_txt}
            </div>
            <img src= {background_img[1]}/>
            <img src= {background_img[2]} />
        </div>
    );
}


export default AboutHeader;

