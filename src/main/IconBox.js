import ImgExplain from '../modules/ImageExplanation.js';

function IconBox({img , content})
{
    let box =[];
    for(let i=0;i<4;i++) box.push( <ImgExplain img={img[i]} content={content[i]}/>);

    return(

        <div className='Main_Icons'>
            {box}
        </div>

    );
    
}

export default IconBox;