import InfoBox from "infobox";
import "./styles/about_styles.css";


export default function AboutPage() {
    return (
        <>
            <Header />
        </>
    )
}

function Header() {

    let title = "GLOBAL BUSINESS";
    let txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    return (
        <section id="top">

            <div aria-label="text">
                <InfoBox title={title} contents={txt} sty />
            </div>

            <article className="subImg">
                <img src="/right1.png" />
                <img src="/right2.png" />
            </article>



        </section>
    )
}

