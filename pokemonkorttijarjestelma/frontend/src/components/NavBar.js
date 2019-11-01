import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { List, Header } from 'semantic-ui-react';


export default class NavBar extends React.Component {

    logout = () => {
        this.props.logout();
    }

    render() {
        let header = "Pokemon App";
        if (this.props.loading) {
            header = "Loading..."
        }

        let style = {
            height: 100,
            backgroundColor: "blue",
            padding: 10
        }
        if (this.props.isLoading) {
            return (
                <div style={style}>
                    <List>
                        <Header>{header}</Header>
                        <List.Item><Link to="/login">Log In</Link></List.Item>
                        <List.Item><Link to="/sets">Sets</Link></List.Item>
                        <List.Item><Link to="/data">Data</Link></List.Item>
                    </List>
                </div>
            )
        } else {
            return (
                <div style={style}>
                    <Header>{header}</Header>
                </div>
            )
        }
    }
}