/*
박스안에 설명
*/

function TextExplain({ title, content }) {

    return (

        <div className="TextDisplay">

            <p>{title}</p>
            <p>{content}</p>

        </div>

    );

}

export default TextExplain;