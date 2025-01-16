import IconElements from './IconElement';
import {index_data} from './data';
import './main.css';

function IconBox()
{
    let box = [];

    for(let i=0;i<4;i++) 
    {
        box.push(<IconElements 아이콘={index_data.아이콘[i]} 내용 = {index_data.아이콘_내용[i]}/>)
    }


    return(

        <div className="IconBox">
            {box}
        </div>

    );
}

export default IconBox;