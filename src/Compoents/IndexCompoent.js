import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* header */
export function Header({ menuList, LogoImg, type }) {

    let Navigate = useNavigate();
    let [hover, sethover] = useState(Array(menuList.length).fill(false));

    let header_sty = { height: '120px', borderBottom: '1px solid black', backgroundColor: (type == 1) ? 'black' : 'white', color: (type == 1) ? 'white' : 'black'}
    let ul_sty = { width: '1200px', height: '100%', textAlign: 'center'  , margin:'0 auto'}
    let img_sty = { paddingTop: '30px' }

    return (

        <header style={header_sty}>
            <ul style={ul_sty}>

                <img src={LogoImg} style={img_sty} />

                {
                    menuList.map((a, i) => {

                        let li_style =
                        {
                            listStyle: 'none',
                            float: 'left',
                            margin: '0px 40px 0px 40px',
                            paddingTop: '70px',
                            textDecoration: hover[i] ? 'underline' : null
                        }

                        if ((menuList.length / 2 - 1) < i) li_style.float = 'right'

                        return (

                            <React.Fragment key={i}>

                                <li
                                    style={li_style}

                                    onMouseEnter={() => {
                                        let clone = [...hover]
                                        clone[i] = true
                                        sethover(clone);
                                    }}

                                    onMouseLeave={() => {
                                        let clone = [...hover]
                                        clone[i] = false
                                        sethover(clone);
                                    }}

                                    onClick={() => {
                                        if (i == 2) Navigate('/about')
                                    }}
                                >
                                    {a}

                                </li>
                            </React.Fragment>

                        )
                    })
                }

            </ul>
        </header>

    )
}

/* main img */
export function Mainimg({ main_img }) {
    let mainimg_sty = { width: '100%' }

    return (
        <img src={main_img} style={mainimg_sty} />
    )
}

/* Icon title */
export function Icon_title({ little_Name, little_Name_txt }) {

    let IconTitle_sty = { height: '68px', margin:'20px 0px 40px 0px', textAlign: 'center' }
    let p_sty = { fontSize: '20px' }

    return (

        <div style={IconTitle_sty}>
            <div>
                <p style={p_sty}>{little_Name}</p>
                <h2>{little_Name_txt}</h2>
            </div>
        </div>

    );


}

/* Icon List */
export function Icon_List({ 아이콘_내용, 아이콘_이미지 }) {

    let icon_box_Sty = { height: '216px', textAlign: 'center' }
    let icon_list_sty = { width: '250px', display: 'inline-block', padding: '0px 20px 0px 20px' }
    let p_sty = { fontSize: '14px', lineHeight: '25px' }

    return (

        <div style={icon_box_Sty}>
            {
                아이콘_내용.map((a, i) => {

                    return (
                        <div key={i} style={icon_list_sty}>
                            <img src={아이콘_이미지[i]} />
                            <p style={p_sty}>{아이콘_내용[i]}</p>
                            <h2>.....................................</h2>
                        </div>
                    )

                })
            }
        </div>

    )

}

/* chef */
export function Chefs({ 셰프내용, 셰프_이미지 }) {

    let chefs_background = { backgroundColor: 'lightgray'}
    let chefs_div_sty = { width: '800px', margin: '0 auto', paddingTop : '40px'}
    let left_txt = { float: 'left', width:'500px'}
    let right_txt = { float: 'right' }
    let float_clear = {content :'', display:'block', clear:'both'}

    return (

        <div style={chefs_background}>

            <div style={chefs_div_sty}>

                <div style={left_txt}>
                    <h2>Title</h2>
                    <p>{셰프내용}</p>
                </div>

                <img src={셰프_이미지} style={right_txt} />

                <div style={float_clear}/>

            </div>

        </div>

    );

}