import React from 'react';
//import { Image } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';
//import { List } from 'semantic-ui-react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Switch, Route} from 'react-router-dom';
import SingleSets from './SingleSets';

export default class Sets extends React.Component {
	
	/*constructor(props) {
		super(props);
		this.state = {
			name,
			id
		}
	}*/
	
    render() {
        let style = {
            margin: 10,
            aling: "left",
            padding: 5
            
        }
		
        return (

            <div style={style}>
                <ListGroup>
					<ListGroup.Item name={this.props.name} action href={"/sets/" + this.props.name}>Base Set</ListGroup.Item>
				</ListGroup>
            </div>
        )
    }
}