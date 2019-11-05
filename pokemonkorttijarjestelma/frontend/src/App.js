import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { } from 'react-router-dom';
import NavBar from './components/NavBar';
//import NavBar2 from './components/NavBar2';
import LogIn from './components/LogIn';
import Info from './components/Info';
import Sets from './components/Sets';
import Cards from './components/Cards';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      token:"",
      isLogged:false
    }
  }
  
render() {
  return (
    <div className="App">
      <NavBar/>
      <LogIn />
      <br>
      </br>
      <hr></hr>
      <Info />
      <br>
      </br>
      <hr></hr>
      <Sets />
      <br>
      </br>
      <hr></hr>
    </div>
  )
}
}
export default App;

