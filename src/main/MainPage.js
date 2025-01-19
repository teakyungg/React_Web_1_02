import '../main.css';
import Header_Box from './section/HeaderBox.js';
import IconTitleBox from './section/IconTitleBox.js';
import IconBox from './section/IconBox.js';
import ChefsBox from './section/ChefsBox.js';
import { index_data } from '../data.js';


function Main() {

  return (

    <>
      {/* 상단 메뉴 */}
      <Header_Box pageName={index_data.헤더_메뉴} nextpage={index_data.이동_주소} />
      <hr />

      {/* 메인 이미지 */}
      <img src={index_data.메인_이미지} className='Main_img' />

      {/* 아이콘 타이틀 */}
      <IconTitleBox title={index_data.소제목} content={index_data.소제목_내용} />

      {/* 아이콘 내용 */}
      <IconBox img={index_data.아이콘} content={index_data.아이콘_내용} />

      {/* 셰프 내용 */}
      <ChefsBox title={"TITLE"} content={index_data.셰프내용} img={index_data.셰프} />

    </>

  )

}

export default Main;