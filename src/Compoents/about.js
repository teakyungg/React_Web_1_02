import './about.css'


let chef_about = '/chef_about.png';
let right1 = '/right1.png';
let right2 = '/right2.png';

let 작은_제목 = "GLOBAL BUSINESS";
let 작은_내용 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

let 작은_박스_제목 = ["Title", "Title", "", "", "", "", ""];
let 작은_박스_내용 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

let 세부_사항 = ["법적 고지", "이메일무단수집거부", "이용약관", "개인정보처리방침", "고객센터", "입찰공고"];


export default function About() {

    return (
        <>
            <Header />
            <ALL_Box />
            <Footer />
        </>

    )
    
}


function Header() {

    return (

        <div className='top'>

            <div style={{ backgroundImage: `url(${chef_about})` }}>

                <div>

                    <h2>{작은_제목}</h2>
                    <p>{작은_내용}</p>


                </div>

            </div>

            <img src={right1} />
            <img src={right2} />
        </div>

    )
}

function ALL_Box() {

    return (

        <div className='ALL_Box'>

            {
                작은_박스_제목.map(function (a, i) {

                    let title = 작은_박스_제목[i];

                    if (title == "") title = (i) + ".";
                    if (i == 3) title = "7.";

                    return (

                        <div key={i}>
                            <h2>{title}</h2>
                            <p>{작은_박스_내용[i]}</p>
                        </div>

                    );

                })


            }

        </div>

    );
}

function Footer() {

    return (
        <div className='footer'>

            <div>

                {
                    세부_사항.map(function (a, i) {
                        return (
                            <p key={i}>{세부_사항[i]}</p>
                        );
                    })
                }


            </div>


        </div>
    );

}



