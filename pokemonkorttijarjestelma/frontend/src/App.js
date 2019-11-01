import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { } from 'react-router-dom';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
//import Info from './components/Info';
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
      
    </div>
  )
}
}
export default App;
