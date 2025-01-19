import '../about.css';
import HeaderBox from './section/HeaderBox.js';
import MainBox from './section/MainBox.js';
import Footer from './section/Footer.js';

import { about_data } from '../data.js';

function about() {

    return (
        <>
            {/* 헤더 박스 */}
            <HeaderBox img={about_data.헤더_이미지} title={about_data.작은_제목} text={about_data.작은_내용} />

            {/* 메인 박스 */}
            <MainBox title={about_data.작은_박스_제목} content={about_data.작은_박스_내용} />
            
            {/* footer  */}
            <Footer content={about_data.세부_사항}/>
        </>
    )

}

export default about;


