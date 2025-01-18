import { useNavigate } from 'react-router-dom';

/* 
    제목(클릭 시 페이지 전환)
*/

function MoveToPage({ content, nextpage }) {

    let Navigate = useNavigate();

    if (typeof (content) != 'string') content = "NOT CONTENT";    // 텍스트가 입력되지 않았을 때
    if (typeof (nextpage) == 'undefined') nextpage = '/';         // 넘어갈 페이지가 입력되지 않았을 때

    return (

        <li onClick={() => { Navigate(nextpage) }} className='MoveToPage'> {/* 제어용 className */}
            {content}
        </li>

    );

}

// 다른 모듈도 이렇게 만들도록 하자
export default MoveToPage;


