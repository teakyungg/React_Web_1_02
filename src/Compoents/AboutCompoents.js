/* 메인 이미지 */
export function MainImg({ 메인이미지, 서브이미지, 타이틀, 내용 }) {

    let main_background = { width: '1000px', height: '500px', margin: '0 auto' }
    let main_img = { width: '750px', height: '500px', float: 'left', backgroundImage: `url(${메인이미지})` }
    let sub_img = { float: 'right' }

    let main_txt_box = { boxSizing: 'border-box', width: '250px', height: '250px', float: 'left', margin: '250px 0px 0px 0px', padding: '20px', backgroundColor: 'rgba(81, 255, 110, 0.5)' }
    let title = { margin: '0' }

    return (

        <div style={main_background}>

            <div style={main_img}>
                <div style={main_txt_box}>
                    <h2 style={title}>{타이틀}</h2>
                    <p>{내용}</p>
                </div>
            </div>

            <img src={서브이미지.one} style={sub_img} />
            <img src={서브이미지.two} style={sub_img} />

        </div>

    );
}

/* 중간에 박스 뭉쳐있는 곳 */
export function Allbox({ 작은_박스_제목 , 작은_박스_내용}) {

    let all_box_size = { width: '1000px', height: '500px', margin: '0 auto'}
    let mini_box = { boxSizing: 'border-box', width: '250px', height: '250px', backgroundColor: 'yellow', padding: '15px', float: 'left' }

    let mini_box_title = {margin : '0'}
    let mini_box_txt = {fontSize:'14px'}

    return (

        <div style={all_box_size}>

            {

                작은_박스_제목.map((a, i) => {

                    let clone = {...mini_box}
                    let title = 작은_박스_제목[i]


                    if(i == 3)
                    {
                        clone.height = '500px'
                        clone.float = 'right'
                        clone.backgroundColor = 'rgb(0, 153, 255)'
                        title = "7"
                    }

                    if(i == 1 || i == 4 || i == 6) clone.backgroundColor = 'brown'
                    if(title == "") title = `${i}`

                    return (
                        <div style={clone}>
                            <h2 style={mini_box_title}>{title}</h2>
                            <p style={mini_box_txt}>{작은_박스_내용[i]}</p>
                        </div>
                    )

                })

            }


        </div>
    )

}

/* footer */
export function Footer({세부사항})
{
    let all_size = {width:'1000px', margin:'0 auto'}
    let footer_size = {boxSizing: 'border-box', width:'750px', height:'40px', padding:"10px" , backgroundColor:'gray'}
    let list = {float:'left', padding:'0px 10px 0px 10px', fontSize:'15px'}

    let last = " |"

    return(
        <div style={all_size}>
            <div style={footer_size}>

                {
                    세부사항.map((a,i) => {
                        return(
                            <div style={list}>
                              {last}
                            </div>
                        )
                    })
                  
                }

            </div>
        </div>
    )
}