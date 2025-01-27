import TextWithLink from "../../modules/display/sub/TextWithLink.js";

function MainHeader({ header_data, logo_img}) {

    let menu = header_data.map((item) => item.menu); // [{menu : ~~}] 형태에서 menu라는 키 값을 사용해서 value를 추출 (현재 menu 텍스트 들어있음)
    let link = header_data.map((item) => item.link); // 위와 같은 형식

    let menu_Box = menu.map((item,i) => <TextWithLink text={menu[i]} nav={link[i]}/>)   // menu_box에는 6개의 li가 들어있다.

    return <Render menu_Box={menu_Box} logo_img={logo_img} />
}

function Render({ menu_Box, logo_img }) {   // 여기서 랜더링에 필요한 구조로 만들고, css에서 외형을 결정함

    return (

        <header className='Main_Header'>

            <img src={logo_img} />  
            
            <div className={'Main_Header' + '_menu'}>
                {menu_Box}
            </div>

        </header>

    );

}

export default MainHeader;

/* 
MainHeader에서 데이터를 추출 및 가공한다.
데이터가 어떤 형태로 들어올지 모르기 때문에 여기서 데이터를 가공하는게 맞는거 같다.

가공한 데이터를 기반으로
Render에서 UI를 수정한다.
*/


