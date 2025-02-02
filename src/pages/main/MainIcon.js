import ImgTextDisplay from "imgtextdisplay";


function MainIcon({ Icon_data }) {

    let ImgText_box = Icon_data.map((item) => <ImgTextDisplay img={item.img} contents={item.content}/>);

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
