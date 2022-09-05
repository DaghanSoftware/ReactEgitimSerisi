import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Semih Dağhan",
        salary : "5000",
        department : "Bilişim"
      },
      {
        id: 2,
        name: "Emirhan Dağhan",
        salary : "6000",
        department : "Tamirci"
      },
      {
        id: 3,
        name: "Burak Alak",
        salary : "2500",
        department : "Öğrenci"
      }
    ]
  }
  render(){
  return (
    
    <div className="container">
      <Navbar title = "User App"/>
      <hr></hr>
      <Users users = {this.state.users}/>
    </div>
  )
  }
}

export default App;
