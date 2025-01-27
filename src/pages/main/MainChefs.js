import TextDisplay from "../../modules/display/TextDisplay";

function MainChefs({chef_data})
{
    let title = chef_data.title;
    let content = chef_data.content;
    let img = chef_data.img;

    let chefs_txt_box = <TextDisplay title={title} content={content}/>

    return <Render img={img} chefs_txt_box={chefs_txt_box}/>
}

function Render({img , chefs_txt_box})
{
    return(
        <div className="Main_Chefs">
            {chefs_txt_box}
            <img src={img}/>
        </div>
    );
}

export default MainChefs;


/* 
왜 MainChefs, Render라는 2개의 함수로 나누었니?

-> MainChefs에서는 필요한 데이터의 저장 및 가공만 담당하게 만듬
-> Render에서는 마지막에 어떻게 눈에 보이게 할 것인가를 결정하는 방식으로 구성했음


만약 나중에 데이터를 수정해야한다면 어떻게 해야하는가?

-> 안에 있는 내용을 수정하려면 box = `~~`을 수정하면 된다.
-> UI를 바꾸고 싶으면 Render 컴포넌트를 수정하거나, css에서 수정한다.

*/