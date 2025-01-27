import ImgTextDisplay from "../../modules/display/ImgTextDisplay";

function MainIcon({ Icon_data }) {

    let img = Icon_data.map((item) => item.img);
    let text = Icon_data.map((item) => item.content);

    let ImgText_box = Icon_data.map((num, i) => <ImgTextDisplay img={img[i]} contents={text[i]} />);

    return <Render ImgText_box={ImgText_box} />
}

function Render({ ImgText_box }) {

    return (
        <div className="Main_Icon">
            {ImgText_box}
        </div>
    )
}

export default MainIcon;

/* 
MainIcon에서 데이터 변경 
Render에서 UI 담당
 */
