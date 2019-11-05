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

    change = (event) => {
        let state = {}
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    submit = (event) => {
        if (this.state.username.length < 4 || this.state.password.length < 8) {
            alert("Username needs to be atleast 4 characters and password 8 characters long!");
            return;
        }
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if (event.target.name === "register") {
            this.props.register(user);
        } else {
            console.log("user: " + user.username);
            this.props.login(user);
        }
    }

    render() {
        let style = {
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
                            value={this.state.username} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            name="password"
                            onChange={this.change}
                            value={this.state.password} />
                    </Form.Field>
                    <Button onClick={this.submit}
                        name="register">Register</Button>
                        <br></br>
                        <br></br>
                    <Button onClick={this.submit}
                        name="login">Log In</Button>
                </Form>
            </div>
        )
    }
}
