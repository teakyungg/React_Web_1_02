import Title from './sub/Title.js';
import TextItem from './sub/TextItem.js';
import DataArrayChange from '../utils/DataArrayChange.js';

function TextDisplay({ className, title, content }) {   // 데이터만 담당

    let title_data = [];
    let text_data = [];

    text_data = DataArrayChange(content); // 데이터 배열 형태로 변환
    title_data = DataArrayChange(title);

    text_data = text_data.map((num, i) => <TextItem text={num} />)
    title_data = title_data.map((num,i) => <Title text={num}/>)

    return <Display_Render className={className} title_data={title_data} text_data={text_data}/>

}

function Display_Render({ className, title_data, text_data }) {  // 랜더링만 담당

    return (
        <div className={className}>
            {title_data}
            {text_data}
        </div>
    );

}

export default TextDisplay;

// 받은 타이틀, 텍스트의 갯수를 기반으로 안에 p를 생성