import TextDisplay from "../../modules/display/TextDisplay.js";

function MainIconTitle({IconTitle_data}) {   

    let title = IconTitle_data.title;
    let sub = IconTitle_data.sub;

    let Icon_Box = <TextDisplay title={title} content={sub} />

    return <Render Icon_Box={Icon_Box}/>
}

function Render({Icon_Box})
{
    return(
        <div className= 'Main_IconTitle'>
            {Icon_Box}
        </div>
    )
}

export default MainIconTitle;

/* 
MainIconTitle에서 데이터를 가공
한눈에 보았을때 txt_box라는 변수가 어떤 용도로 만들어 졌는지 알 수 있음

Render에서 UI만 조절함
*/