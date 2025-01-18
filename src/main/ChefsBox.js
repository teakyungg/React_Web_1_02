import TextExplain from '../modules/TextDisplay.js'

function ChefsBox({title, content, img}){

    return(
        <div className='Main_Chef'>
           <TextExplain title={title} content={content}/>
           <img src= {img}/>   
        </div>
    );
}

export default ChefsBox;