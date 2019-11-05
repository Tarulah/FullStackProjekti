import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default class Cards extends React.Component {

render() {
    return (
        <div>
        <Container>
            <Row classname="justify-content-md-center">
                <Col xs lg="2">
                    <img src={""} alt=""></img>                       
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <h4>Clefable</h4>
                </Col>

            </Row>
            <Row classname="justify-content-md-center">
                <Col xs lg="2">
                <img src={""} alt=""></img>
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <h4>Electrode</h4>
                </Col>
            </Row>
            </Container>
            </div>
    )
}   
} 

