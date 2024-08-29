import visaPic from '../images/visa.png';
import masterPic from '../images/master.png';

function CreditCard(props) {
    const boxColor = {
        backgroundColor: props.bgColor
    };
    const color = {
        color: props.color
    }
    return (

        <div className="creditcard" style={boxColor}>
            <img className="cardtype" src={typeToPic(props.type)} alt="This is an image" />

            <div className="num" style={color} >&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {props.number.slice(-4)}</div>
            <div className='day' style={color}>
                <div>Expires {props.expirationMonth}/{props.expirationYear}</div>
                <div className="bankname">{props.bank}</div>
            </div>
            <div style={color}>{props.owner}</div>
        </div>

    );


}

function typeToPic(type) {
    switch (type) {
        case 'Visa':
            return visaPic
            break;
        case 'Master Card':
            return masterPic
            break;
        default:

    }
}

export default CreditCard;