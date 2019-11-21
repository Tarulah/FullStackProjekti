import React from 'react';
import {Table} from 'semantic-ui-react';

export default class Row extends React.Component {
	
	render() {
		return (
			<Table.Row>
				<Table.Cell>{this.props.card.cardName}</Table.Cell>
				<Table.Cell>{this.props.card.PokemonType}</Table.Cell>
				<Table.Cell>{this.props.card.setNumber}</Table.Cell>
			</Table.Row>
		)
	}
}