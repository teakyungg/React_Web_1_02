function Footer({content}) {

    let box = [];
    for (let i = 0; i < 6; i++) box.push(<p>{content[i]}</p>);

    return (
        <div className="About_Footer">
            <div>
                {box}
            </div>
        </div>
    )
}

export default Footer;