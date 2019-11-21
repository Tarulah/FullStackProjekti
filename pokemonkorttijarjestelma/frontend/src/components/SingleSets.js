import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from './Row';


export default class SingleSets extends React.Component{
	
	//this.props.list sisälsi vähän kaikenlaista ylimääräistä.
	//Tällä putsataan se ylimääräinen pois ja saadaan puhdas objekti, jossa on vai setin kortit
	getSetObject = () => {
		let data = this.props.list;
		
		let arr = Object.keys(data);
		console.log(arr);
		
		let setObject = {};
		
		arr.map(tempItem => {
			if(tempItem === "recordset"){
				setObject = {[tempItem]: data[tempItem]};
			}
		})
		
		return setObject;
	}

	render() {
        let style = {
            margin: 10,
            aling: "left",
            padding: 5
        }
		
		let obj = this.getSetObject();
		let arr = Object.keys(obj);
		
		let items = obj[arr].map(card => {
			return (
				<Row key={card.id} card={card} />
			)
		})
		
        return (

            <div style={style}>
                <table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Set number</th>
						</tr>
					</thead>
					<tbody>
					{items}
					</tbody>
				</table>
            </div>
        )
    }
}