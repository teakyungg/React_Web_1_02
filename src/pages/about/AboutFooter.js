import DataArrayChange from "../../modules/utils/DataArrayChange";
import TextItem from "../../modules/display/sub/TextItem";

function AboutFooter({ footer_data }) {
    
    let menu = footer_data.map((item) => item.menu);    // 메뉴 텍스트만 추출한다
    menu = menu.map((num) => <TextItem text={num} />);  // 텍스트를 기반으로 JSX 형태로 바꾼다.

    return <Render data={menu} />
}

function Render({ data }) {
    return (
        <div className="About_Footer">
            <ul>
                {data}
            </ul>
        </div>
    )
}



export default AboutFooter;