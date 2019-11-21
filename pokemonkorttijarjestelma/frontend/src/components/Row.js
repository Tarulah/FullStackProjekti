import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Row extends React.Component {
	
	render() {
		return (
			<tr>
				<td>{this.props.card.cardName}</td>
				<td>{this.props.card.PokemonType}</td>
				<td>{this.props.card.setNumber}</td>
			</tr>
		)
	}
}