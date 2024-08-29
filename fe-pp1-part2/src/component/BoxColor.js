function CreditCard(props) {
    const boxColor = {
        backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`
    };
    const color = {
        color: props.color
    }
    return (

        <div className="box" style={boxColor}>           
            <p >rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r,props.g,props.b)}</p>
        </div>
    );


}

function rgbToHex(r, g, b) {
    // 确保 RGB 值在 0-255 范围内
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // 将每个 RGB 值转换为两位的十六进制字符串
    const toHex = (num) => num.toString(16).padStart(2, '0').toUpperCase();

    // 拼接十六进制颜色值，并加上 # 前缀
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default CreditCard;