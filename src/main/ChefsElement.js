function ChefsElement({타이틀 , 내용}) {
    return (

        <div className="ChefsElement">

            <div>
                <h2>{타이틀}</h2>
                <p>{내용}</p>
            </div>
            <img src="/chef.png" />

        </div>


    )
}

export default ChefsElement;