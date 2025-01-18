import TextDisplay from '../modules/TextDisplay.js';

function MainBox({title, content})
{
    let box = [];

    let setTitle;

    for(let i=0;i<7;i++) 
    {
        if(title[i] == "") setTitle = `${i+1}`;
        else setTitle = title[i];

        if(i == 3) setTitle = '4';

        box.push(<TextDisplay title= {setTitle} content={content[i]}/>);
    }


    return(
       <div className='About_Main'>
            {box}
       </div>
    );
    
}

export default MainBox;