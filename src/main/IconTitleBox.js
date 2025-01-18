import TextExplain from '../modules/TextDisplay.js';

function IconTitleBox({title , content}) {

    return (
        <div className= 'Main_IconTitle'>
            <TextExplain title = {title} content={content}/>
        </div>
    );
}

export default IconTitleBox;