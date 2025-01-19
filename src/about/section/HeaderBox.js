import ImgTextBox from '../../modules/TextOnImage.js';

function HeaderBox({ img, title, text }) {

    let box = []

    for (let i = 0; i < 3; i++) 
    {
        if(i == 0) box.push(<ImgTextBox img={img[i]} title={title} text={text} />);
        else box.push(<ImgTextBox img={img[i]}/>);
    }


    // 이거 헤더박스 
    return (

        <div className='About_Header'>
            {box}
        </div>
    );


}

export default HeaderBox;


