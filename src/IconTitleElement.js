import './main.css';

function Title_txt({ 작은제목, 큰제목 }) {

    return (

        <div className='Title_txt'>
            <p>{작은제목}</p>
            <h2>{큰제목}</h2>
        </div>

    );

}

export default Title_txt;