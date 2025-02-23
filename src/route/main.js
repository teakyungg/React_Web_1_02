import { Link } from "react-router-dom";
import "./styles/main_styles.css";
import FigureBox from "figurebox";

export default function MainPage() {
    return (
        <>
            <Header />
            <Article />
            <Main />
            <Add_Explanation/>
        </>
    )
}

function Header() {

    let menu = [{ txt: "How to Works", link: "/" }, { txt: "Girts", link: "/" }, { txt: "About", link: "about" }, { txt: "Login", link: "/" }, { txt: "Members", link: "/" }, { txt: "Contracts", link: "/" }]
    menu = menu.map((item, i) => <li key={i}><Link to={item.link}>{item.txt}</Link></li>);

    return (
        <header>

            <img src="/logo.png" alt="logo img" />

            <nav>
                <ul>
                    {menu}
                </ul>
            </nav>

        </header>
    )

}

function Article() {
    return (
        <article className="mainImg">
            <img src="/main.png" alt="Inside the store" />
        </article>
    )
}

function Main() {

    let txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    let decoration = <div aria-label="text decoration">.............................................................</div>;

    return (
        <main>
            <FigureBox num={0} contents={txt} dec={decoration} />
            <FigureBox num={1} contents={txt} dec={decoration} />
            <FigureBox num={2} contents={txt} dec={decoration} />
            <FigureBox num={3} contents={txt} dec={decoration} />
        </main>
    )
}

function Add_Explanation()
{

    let title = 'Title';
    let txt = 'Title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    return(
       <figure className="addExplanation"> 
       
            <figcaption>
               <h2>{title}</h2>
               <p>{txt}</p>
            </figcaption>

            <img src="/chef.png" alt="chef_img"/>
       </figure> 
    )
}



