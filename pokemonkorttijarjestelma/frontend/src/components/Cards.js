import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


export default class Cards extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <Col xs="2"><img src={""} alt=""></img></Col>
                        <Col xs="2">
                            <Row>
                                <h4>Base Set</h4>
                            </Row>
                            <Row>
                                <p>Alakazam</p>
                            </Row>
                            <Row>
                                <p>Psychic</p>
                            </Row>
                            <Row>
                                <p>1/104</p>
                            </Row>
                        </Col>
                    </div>
                </Container>
            </div>
        )
    }
}

