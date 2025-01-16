import './main.css';
import ChefsElement from './ChefsElement.js';
import {index_data} from './data.js';

function ChefsBox(){
    return(
        <div className='ChefsBox'>
            <ChefsElement 타이틀 = {"Title"} 내용 = {index_data.셰프내용}/>
        </div>
    );
}

export default ChefsBox;