import '../main.css';
import HeaderElement from './HeaderElement.js';
import { index_data } from '../data.js'

/* header의 전체 박스 */
function Header_Box() {

    let box = []

    for (let i = 0; i < 6; i++) 
    {
        box.push(<HeaderElement 내용={index_data.헤더_메뉴[i]} 이동주소={index_data.이동_주소[i]} key={i}/>) // 데이터 값 넣어서 출력함
    }

    return (

        <ul className="Header_Box">
            {box}
            <img src={index_data.로고} />
        </ul>
        
    );

}

export default Header_Box;
