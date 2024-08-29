function IdCard(props) {
    return (
        <div class='stick'>
            <div class='imgbox'>
                <img class="img" src={props.pic} />
            </div>
            <div class='infobox'>
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height:</strong> {props.height/100}m</p>
                <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
            </div>



        </div>
    );


}

export default IdCard;