import MoveToPage from '../modules/MoveToPage.js';

/* header의 전체 박스 */
function Header_Box({ pageName, nextpage}) {

    let box = [];

    for(let i=0;i<6;i++)
    {
        box.push(<MoveToPage content={pageName[i]} nextpage={nextpage[i]}/>)
    }

    return (

        <div className='Main_Header'>
            {box}
            <img src='/logo.png'/>
        </div>

    )
}

export default Header_Box;
