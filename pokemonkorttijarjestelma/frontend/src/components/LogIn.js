import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class LoginIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    render() { 
        let style ={
            margin: "auto",
            padding: 10,
            width: 200,
        }

        return (
            <div style={style}>
            <Form>
                <Form.Field>
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                        name="username" 
                        onChange={this.change}
                        value={this.state.username}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        name="password" 
                        onChange={this.change}
                        value={this.state.password}/>
                </Form.Field>
                <Button onClick={this.submit}
                    name="login">Log In</Button>   
            </Form>
            </div>
        )
    }
}