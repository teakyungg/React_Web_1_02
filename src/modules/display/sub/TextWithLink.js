import { useNavigate } from "react-router-dom";

function TextWithLink({text , nav}) {
    let Navigate = useNavigate();

    return (
        <p onClick={() => {Navigate(nav)}}>{text}</p>
    );
}

export default TextWithLink;

// 글자 및 이동할 링크를 받는 컴포넌트