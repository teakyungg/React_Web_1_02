/* 
이미지 
~~~ 설명 
*/

function ImgExplain({ img, content }) {
    return (

        <div className='ImageExplanation'>
            <img src={img} />
            <p>{content}</p>
            <h2>........................................</h2>
        </div>

    );
}


export default ImgExplain;