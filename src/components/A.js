

function A(props) {

    let onButtonClicked = () => {
        let message = "A sends Hello to Home";
        props.sendData(message);
    }

    return (

        <div>
            ###########
            This is component A.<br />
            <input type="button" value="Send hello to Home" onClick={onButtonClicked} />
            <br />
            {props.message === '' ? '' : props.message}
            <br />
            <br />###########
        </div>
    );

    

};

export default A;