import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


export default class Cards extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row class="justify-content-xs-center">
                        <Col xs="2">
                            <img src={""} alt=""></img>
                        </Col>
                        <Col xs="2">
                            <Row>
                                <h4>Jungle</h4>
                            </Row>
                            <Row>
                                <p>Clefable</p>
                            </Row>
                            <Row>
                                <p>1/64</p>
                            </Row>
                            <Row>
                                <p>holo</p>
                            </Row>
                        </Col>
                    </Row>
                    <br></br>
                    <Row class="justify-content-xs-center">
                        <Col xs="2">
                            <img src={""} alt=""></img>
                        </Col>
                        <Col xs="2">
                            <Row>
                                <h4>Jungle</h4>
                            </Row>
                            <Row>
                                <p>Clefable</p>
                            </Row>
                            <Row>
                                <p>1/64</p>
                            </Row>
                            <Row>
                                <p>holo</p>
                            </Row>
                        </Col>
                    </Row>
                    <hr></hr>
                    <div class="d-flex justify-content-center">
                        <Col xs="2"><img src={""} alt=""></img></Col>
                        <Col xs="2">
                            <Row>
                                <h4>Jungle</h4>
                            </Row>
                            <Row>
                                <p>Clefable</p>
                            </Row>
                            <Row>
                                <p>1/64</p>
                            </Row>
                            <Row>
                                <p>holo</p>
                            </Row>
                        </Col>
                    </div>
                </Container>
            </div>
        )
    }
}

