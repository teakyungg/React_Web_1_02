import './main.css';
import HeaderElement from './HeaderElement.js';
import { index_data } from './data.js'

/* header의 전체 박스 */
function Header_Box() {

    let box = []
    for (let i = 0; i < 6; i++) box.push(<HeaderElement 내용={index_data.헤더_메뉴[i]} key={i} />) // 데이터 값 넣어서 출력함

    return (

        <ul className="Header_Box">
            {box}
            <img src={index_data.로고} />
        </ul>
        
    );

}

export default Header_Box;

/* 
이제 여기서 몇개의 메뉴를 나열할껀지 for문을 사용해서 box라는 배열안에 넣고 return해서 출력했음
그럼 return받은 li들이 모두 왼쪽으로 붙지 않느냐? -> 맞음, 현재 ul안에 li들이 있는데 모두 왼쪽으로 붙은 상태임
자 그럼 여기서 나는 Header_Box를 이용해서 css에서 Header_Box안에 있는 li들중 4번째 부터 오른쪽으로 붙으라고 고치니 메뉴창이 완성됬음
다른 컴포넌트 구성시에도 이렇게 해볼것
*/