/* 
상자(뒤에 배경 이미지 설정)

상자
ㄴ 타이틀
ㄴ 내용

*/
function TextOnImage({ img, title , text }) {

    return(
        <div className="OnImage" style={{backgroundImage:`url(${img})`}}>

            <div className="OnText">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

        </div>
    )
  
}



export default TextOnImage;