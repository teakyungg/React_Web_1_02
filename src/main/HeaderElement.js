import '../main.css'
import { useNavigate } from 'react-router-dom';

/* header안에 들어 있는 박스 */
function MenuTxt({ 내용 , 이동주소}) {

    let Navigate = useNavigate()

    if (typeof (내용) != 'string') 내용 = "ERROR"

    return (
        <li className="Menu_txt" onClick={() => {Navigate(이동주소)}}>{내용}</li>
    );


}

export default MenuTxt;

