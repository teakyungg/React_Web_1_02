



function HeaderElement({width , height, img})
{

  // 이거 header박스 상자 만드는 것

    let box_sty = {
        width : `${width}px`,
        height : `${height}px`,
        backgroundColor : 'lightblue',
        float : 'left',
        backgroundImage: `url(${img})`
    }

    return (
      <>
        <div style={box_sty}></div>

      </>
    )
}

export default HeaderElement;