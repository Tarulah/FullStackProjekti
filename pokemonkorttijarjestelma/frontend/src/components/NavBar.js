import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Header, Button, Form } from 'semantic-ui-react';
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
            height: 50,
            backgroundColor: 'rgba(33, 108, 170, 0.99)',
            padding: 15
        }

        if (this.props.isLogged) {
            return (
                <div style={style}>
                    <Nav >                    
                        <Nav.Item><Link to="/sets">Sets</Link></Nav.Item>
                        <Nav.Item><Link to="/info">Info</Link></Nav.Item>  
                        <Nav.Item><Link to="/cards">Cards</Link></Nav.Item>                  
                        </Nav>
                    <Form >
                    <Button onClick={this.logout}
                        size="small">Log Out</Button>
                    </Form>
                    
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