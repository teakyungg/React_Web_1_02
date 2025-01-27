function Title({ text, h_Type }) {

    let Tag = (h_Type == undefined) ? 'h2' : 'h' + h_Type;

    return (
        <Tag>{text}</Tag>
    );
}

export default Title;

// 받은 텍스트를 기본 h2형태로 변환, h의 크기 설정가능
// 나중에 기능 추가하기