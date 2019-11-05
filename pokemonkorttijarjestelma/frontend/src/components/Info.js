import React from 'react';

export default class Info extends React.Component {

    render() {
        let style = {
            margin: 10 
        }
        return (
            <div style={style}>
                <h2>Expansions</h2>
                <p>Downloaded expansions</p>
                <p>Cards collected</p>
                <p>Cards collected</p>
            </div>
        )
    }
}