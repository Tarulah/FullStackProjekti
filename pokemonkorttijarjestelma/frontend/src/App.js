import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Sets from './components/Sets';
import Info from './components/Info';
import Cards from './components/Cards';
import SingleSets from './components/SingleSets';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      token: "",
      isLogged: false,
      loading: false
    }
  }

  componenetDidMount() {
    if (sessionStorage.getItem("state")) {
      let state = JSON.parse(sessionStorage.getItem("state"));
      this.setState(state, () => {
        if (this.state.isLogged) {
          this.getList();
        }
      });
    }
  }

  // HELPER FUNCTIONS
  /*
  saveToStorage = (loading) => {
    this.setState({
      loading:loading
    })
  }
  */

  //tuleeko rivit 46-65? entä 163
  saveToStorage = () => {
    sessionStorage.setItem("state", JSON.stringify(this.state));
  }

  sessionExpired = () => {
    this.setState({
      isLogged: false,
      token: "",
      list: [],
      loading: false
    }, () => {
      this.saveToStorage();
    })
  }

  changeLoadingState = (loading) => {
    this.setState({
      loading: loading
    })
  }


  //LOGIN API

  register = (user) => {
    let request = {
      method: "POST",
      mode: "cors",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user)
    }
    fetch("/register", request).then((response) => {
      if (response.ok) {
        alert("Register success!");
      } else {
        console.log("Server responded with status:" + response.status);
      }
    }).catch((error) => {
      console.log("Server responded with error:" + error);
    })
  }

  login = (user) => {
    let request = {
      method: "POST",
      mode: "cors",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user)
    }
    fetch("/login", request).then((response) => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({
            token: data.token,
            isLogged: true
          }, () => {
            //this.getList();
            this.saveToStorage();
          })
        }).catch((error) => {
          console.log("JSON parse failed with error: " + error);
        })
      } else {
        console.log("Server responded with status: " + response.status);
      }
    }).catch((error) => {
      console.log("Server responded with error: " + error);
    })
  }

  logout = () => {
    let request = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "token": this.state.token
      }
    }
    fetch("/logout", request).then(response => {
      this.setState({
        list: [],
        token: "",
        isLogged: false,
        isLoading: false
      }, () => {
        this.saveToStorage();
      })
    }).catch(error => {
      console.log("Server responded with error:" + error);
      this.setState({
        list: [],
        token: "",
        isLogged: false,
        isLoading: false
      }, () => {
        this.saveToStorage();
      })
    })
  }

  getList = () => {
    let request = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "token": this.token
      }
    }
    fetch("/api/sets/BaseSet", request).then((response) => {
		console.log(response);
      if (response.ok) {
        response.json().then((data) => {
          this.setState({
            list: data
          }, () => {
            this.saveToStorage();
          })
        }).catch((error) => {
          console.log("Failed to handle JSON:" + error);
        });
      } else {
        if (response.status === 403) {
          this.sessionExpired();
        }
        console.log("Server responded with status: " + response.status);
      }
    }).catch((error) => {
      console.log("Server responded with error " + error);
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar isLogged={this.state.isLogged}
          logout={this.logout}
          loading={this.state.loading} />
        <Switch>
          <Route exact path="/" render={
            () => this.state.isLogged ? (<Redirect to="/sets" />) :
              (<LogIn login={this.login} register={this.register} />)
          } />
		  
		  <Route exact path="/sets" render={
            () => this.state.isLogged ?
            (<Sets name="BaseSet" list={this.state.list} />):
              (<Redirect to="/"/>)
          }/>	  
		  
		  <Route path="/sets/" render={
			  () => this.state.isLogged ?
			  (<SingleSets name="BaseSet" list={this.state.list} />):
				(<Redirect to="/"/>)
		  }/>
		  
          <Route path="/info" render={
            () => this.state.isLogged ?
            (<Info list={this.stateList}/>):
              (<Redirect to="/"/>)
          }/>
          <Route path="/cards" render={
            () => this.state.isLogged ?
            (<Cards list={this.stateList}/>):
              (<Redirect to="/"/>)
            }/>
          />
        </Switch>

      </div>
    )
  }

}
export default App;