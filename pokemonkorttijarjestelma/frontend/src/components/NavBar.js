import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { List, Header, Button } from 'semantic-ui-react';
import Nav from 'react-bootstrap/Nav';


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

        if (this.props.isLogged) {
            return (
                <div style={style}>
                    <Nav activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}>                    
                        <Nav.Item><Link to="/sets">Sets</Link></Nav.Item>
                        <Nav.Item><Link to="/info">Info</Link></Nav.Item>              
                        <Button onClick={this.logout}
                        class="ulos" name="login">Log Out</Button>
                    </Nav>
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