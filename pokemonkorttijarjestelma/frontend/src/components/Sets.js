import React from 'react';
//import { Image } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';
//import { List } from 'semantic-ui-react';
import ListGroup from 'react-bootstrap/ListGroup';


export default class Sets extends React.Component {

    render() {
        let style = {
            margin: 10,
            aling: "left",
            padding: 5
            
        }
        return (

            <div style={style}>
                <ListGroup>
                    <ListGroup.Item>Clefable</ListGroup.Item>
                    <ListGroup.Item>Electrode</ListGroup.Item>
                    <ListGroup.Item>Base Set</ListGroup.Item>
                    <ListGroup.Item>Electrode</ListGroup.Item>
                    <ListGroup.Item>Electrode</ListGroup.Item>
                </ListGroup>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </div>

            

        )
    }
}