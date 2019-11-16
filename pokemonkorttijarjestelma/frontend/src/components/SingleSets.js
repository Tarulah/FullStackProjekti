import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';

export default class SingleSets extends React.Component{

	render() {
        let style = {
            margin: 10,
            aling: "left",
            padding: 5
        }
		
        return (

            <div style={style}>
                <ListGroup>
					<ListGroup.Item>Kortti {this.props.name}</ListGroup.Item>
				</ListGroup>
            </div>
        )
    }
}