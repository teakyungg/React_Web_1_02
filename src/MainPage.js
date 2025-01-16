import HeaderBox from './main/HeaderBox.js';
import IconTitleBox from './main/IconTitleBox.js';
import IconBox from './main/IconBox.js';
import ChefsBox from './main/ChefsBox.js';
import './main.css';

import { index_data } from './data.js';

function Main() {

    return (
  
      <>
        {/* header 박스 */}
        <div style={{ borderBottom: '2px solid black' }}>
          <HeaderBox />
        </div>
  
        {/* img 박스 */}
        <img src={index_data.메인_이미지} className='Main_img' />
  
        {/* icon 타이틀 박스 */}
        <IconTitleBox />
  
        {/* icon 박스 */}
        <IconBox />
  
        {/* chefs 박스 */}
        <div style={{ width: '100%', backgroundColor: 'lightgray' }}>
          <ChefsBox />
        </div>
      </>
  
    )
  
  }

  export default Main;