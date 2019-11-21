import React from 'react';
//import { Image } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';
//import { List } from 'semantic-ui-react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

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
					<ListGroup.Item name={this.props.name}><Link to={'/sets/'+this.props.name}>BaseSet</Link></ListGroup.Item>
				</ListGroup>
            </div>
        );
    }
}