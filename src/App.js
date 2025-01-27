import { Route, Routes } from 'react-router-dom';
import MainHeader from './pages/main/MainHeader';
import MainIconTitle from './pages/main/MainIconTitle';
import MainIcon from './pages/main/MainIcon';
import MainChefs from './pages/main/MainChefs';

import AboutHeader from './pages/about/AboutHeader';
import AboutMain from './pages/about/AboutMain';
import AboutFooter from './pages/about/AboutFooter';


import './main.css';
import './about.css';

export default function App() {

  const main_header = [
    { menu: 'How to Works', link: '' },
    { menu: 'Girts', link: '' },
    { menu: 'About', link: 'about' },
    { menu: 'Contracts', link: '' },
    { menu: 'Members', link: '' },
    { menu: 'Login', link: '' },
  ]

  const main_icon_title = {
    title: "What's the Dinner",
    sub: "FINALLY HAS AN EASY ANSWER"
  }

  const main_icon = [
    { img: '/icon1.png', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/icon2.png', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/icon3.png', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/icon4.png', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ]

  const main_chef = {
    img: '/chef.png',
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }



  const about_heder_txt = {
    title: 'GLOBAL BUSINESS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }

  const about_header_img = ['/chef_about.png', '/right1.png', '/right2.png'];

  const about_main = [
    { title: 'TITLE', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'TITLE 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ]

  const about_footer = [
    {menu:"법적 고지"},
    {menu:"이메일무단수집거부"},
    {menu:"이용약관"},
    {menu:"개인정보처리방침"},
    {menu:"고객센터"},
    {menu:"입찰공고"},
  ];


  return (

    <div className="App">
      <Routes>

        {/* Main Page */}
        <Route path='/' element={
          <>

            {/* Main Header */}
            <MainHeader header_data={main_header} logo_img={'/logo.png'} />

            {/* Main Img */}
            <img className='Main_Img' src={'/main.png'} />

            {/* Main IconTitle  */}
            <MainIconTitle IconTitle_data={main_icon_title}/>

            {/* Main Icon */}
            <MainIcon Icon_data={main_icon} />

            {/* Main Chefs */}
            <MainChefs chef_data={main_chef} />

          </>

        } />



        {/* About Page */}
        <Route path='/about' element={

          <>

            {/* About Header */}
            <AboutHeader smallBox_title={about_heder_txt.title} smallBox_txt={about_heder_txt.content} background_img={about_header_img} />

            {/* About Main */}
            <AboutMain small_box_data={about_main} />

            {/* About Footer */}
            <AboutFooter footer_data={about_footer} />


          </>

        } />

      </Routes>

    </div>

  );
}



