import './main.css'

function IconElement({아이콘 , 내용})
{
    return(

        <div className="IconElement">
            
            <img src={아이콘}/>
            <p>{내용}</p>

            <h2>........................................</h2>
        </div>

    );
}


export default IconElement;