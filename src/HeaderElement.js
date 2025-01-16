import './main.css'

/* header안에 들어 있는 박스 */
function MenuTxt({ 내용 }) {

    if (typeof (내용) != 'string') 내용 = "ERROR"

    return (
        <li className="Menu_txt">{내용}</li>
    );


}

export default MenuTxt;

