import IconTitleElement from './IconTitleElement';
import {index_data} from './data.js';

function IconTitleBox() {

    return (
        <div className="IconTitle_Box">
            <IconTitleElement 작은제목={index_data.소제목} 큰제목={index_data.소제목_내용}/>
        </div>
    );
}

export default IconTitleBox;