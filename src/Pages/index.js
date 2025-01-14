import React from 'react';
import { index_data } from '../data.js';
import { Header, Mainimg, Icon_title, Icon_List, Chefs } from '../Compoents/IndexCompoent.js'


export default function Index() {

    return (

        <React.Fragment>

            <Header menuList={index_data.헤더_메뉴} LogoImg={index_data.로고} type={0} />
            <Mainimg main_img={index_data.메인_이미지} />
            <Icon_title little_Name={index_data.소제목} little_Name_txt={index_data.소제목_내용} />
            <Icon_List 아이콘_내용={index_data.아이콘_내용} 아이콘_이미지={index_data.아이콘} />
            <Chefs 셰프내용={index_data.셰프내용} 셰프_이미지={index_data.셰프} />

        </React.Fragment>

    );

}



