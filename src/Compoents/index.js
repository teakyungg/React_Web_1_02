import { useState } from 'react';
import './index.css';
import { Route, Routes, Link } from 'react-router-dom';

// 경로에 맞게 로고 이미지를 넣으면 됨 (빌드 시 public폴터가 최상위 디렉토리로 설정이 된다.)
// src 폴터에도 이미지를 넣어서 사용이 가능하지만 import, require 형태로 불러와야한다.

let 헤더_메뉴 = ["How to Works", "Girts", "About", "Login", "Members", "Contracts"];

let 로고 = "/logo.png";
let 메인_이미지 = "/main.png";

let 아이콘 = ["/icon1.png", "/icon2.png", "/icon3.png", "/icon4.png"];
let 아이콘_내용 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
]

let 셰프 = "/chef.png";
let 셰프내용 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";



export default function Index() {

    

    return (

        <>
            <Header menu_txt={헤더_메뉴} logo_img={로고} />
            <Main_img main_img={메인_이미지} />
            <Icon_title />

            <Icon_box icon_arr={아이콘} icon_data={아이콘_내용} />
            <Chefs chef_data={셰프내용} chef_img={셰프} />
        </>

    );

}


function Header(data) {

    let 왼쪽_메뉴 = data.menu_txt.slice(0, 3);
    let 오른쪽_메뉴 = data.menu_txt.slice(3, 7);

    return (

        <header>

            <div>
                <ul className='left'>
                    <li>{왼쪽_메뉴[0]}</li>
                    <li>{왼쪽_메뉴[1]}</li>
                    <li><Link to='/about'>{왼쪽_메뉴[2]}</Link></li>
                </ul>

                <img src={data.logo_img}></img>

                <ul className='right'>
                    <li>{오른쪽_메뉴[0]}</li>
                    <li>{오른쪽_메뉴[1]}</li>
                    <li>{오른쪽_메뉴[2]}</li>
                </ul>
            </div>

        </header>
    )
}

function Main_img(data) {
    return (
        <img src={data.main_img} className='main_img'></img>
    )
}

function Icon_title() {

    return (

        <div className='Icon_title'>
            <div>
                <p>
                    "What's the Dinner"
                </p>

                <h3>
                    FINALLY HAS AN <br />
                    EASY ANSWER
                </h3>
            </div>
        </div>

    );


}

function Icon_box(data) {

    return (

        <div className='Icon_box'>

            {
                아이콘.map(function (a, i) {

                    return (
                        <div key={i}>
                            <img src={data.icon_arr[i]} />
                            <p>{data.icon_data[i]}</p>
                            <h2>.....................................</h2>
                        </div>
                    )

                })
            }


        </div>

    );

}

function Chefs(data) {
    return (

        <div className='Chefs'>

            <div>

                <div>
                    <h2>Title</h2>
                    {data.chef_data}
                </div>

                <img src={data.chef_img} />

            </div>

        </div>

    );
}
