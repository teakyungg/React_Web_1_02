import { Route, Routes, Link } from 'react-router-dom';
import HeaderBox from './HeaderBox.js';
import IconTitleBox from './IconTitleBox.js';
import IconBox from './IconBox.js';
import ChefsBox from './ChefsBox.js';
import './main.css';

import { index_data } from './data.js';





function App() {



  return (

    <div className="App">

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
        <ChefsBox/>
      </div>

    </div>

    /*  <Routes>


    </Routes> */



  );
}

export default App;
