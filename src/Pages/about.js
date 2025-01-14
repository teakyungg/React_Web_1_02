import { about_data } from '../data.js'
import {MainImg, Allbox, Footer} from '../Compoents/AboutCompoents.js'

export default function About() {

    return (

        <>
          <MainImg 메인이미지={about_data.chef_about} 서브이미지={about_data.sub_img} 타이틀={about_data.작은_제목} 내용 = {about_data.작은_내용}/>
          <Allbox 작은_박스_제목 = {about_data.작은_박스_제목} 작은_박스_내용={about_data.작은_박스_내용}/>
          <Footer 세부사항={about_data.세부_사항}/>
        </>

    )

}





