import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import A from './A';
import { useState } from 'react';


function Home() {
    const [data, setData] = useState('');
    const [message, setMessage] = useState('');

    let onDataSentFromA = (message) => {
        setData(message);
    }

    let onSendButtonClicked = () => {
        let messageToA = "Home sends Greetings to A";
        setMessage(messageToA);
    }


    return (
        <Row>
            <Col>
                <br />My Home Page! <br />
                {data === '' ? '' : data}
                <br />
                <input type="button" value="Send Greetings to A" onClick={onSendButtonClicked} />
                <A sendData={onDataSentFromA} message={message}/>
            </Col>
        </Row>
    );
}

export default Home;