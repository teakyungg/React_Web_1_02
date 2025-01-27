import DataArrayChange from "../utils/DataArrayChange";
import TextItem from "./sub/TextItem";

function ImgTextDisplay({ img, contents })   // 데이터 변경만 담당
{
    let img_data = DataArrayChange(img);
    let contents_data = DataArrayChange(contents);

    img_data = img_data.map((num, i) => <img src={num} />)   // 배열 데이터가 들어 있음
    contents_data = contents_data.map((num, i) => <TextItem text={num} />)    // 배열 데이터가 들어있음

    return <Display_Render img={img_data} contents={contents_data} />
}

function Display_Render({ img, contents })   // 랜더링만 담당
{
    let box = [];

    for (let i = 0; i < img.length; i++) {
        box.push(
            <div>
                {img[i]}
                {contents[i]}
                <h2>........................................</h2>
            </div>
        );
    }

    return box;
        
}

export default ImgTextDisplay;