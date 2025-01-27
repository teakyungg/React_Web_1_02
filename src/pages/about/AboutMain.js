import TextDisplay from "../../modules/display/TextDisplay";

// 어떤 데이터를, 몇개를, 어떤 변수에 넣을 것인가? 
function AboutMain({ small_box_data }) {   // 데이터 가공만 담당

    let small_box = [];

    let title;
    let content;

    for (let i = 0; i < 7; i++) {   // 7개를 강제로 만들어야해서 이렇게 사용

        if (i < small_box_data.length) {
            title = small_box_data[i].title;
            content = small_box_data[i].content;
        }

        else
        {
            if(i < 3) title = `${i+1}.`;
            else title = `${i}.`;

            content ="";
        }

        if(i == 3) title = '4.';

        small_box.push(<TextDisplay title={title} content={content} />);
    }

    return <Render small_box={small_box} />
}

function Render({ small_box }) {
    return (

        <div className="About_Main">
            {small_box}
        </div>
    )
}

export default AboutMain;