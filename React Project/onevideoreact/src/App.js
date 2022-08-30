import React,{ Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {
  // state = {
  //   users:[]
  // };

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id : 1,
          name : "Semih Dağhan",
          email : "STElbatra@hotmail.com"
        },
        {
          id : 2,
          name : "Burak Alak",
          email : "burakalak7@hotmail.com"
        },
        {
          id : 3,
          name : "Emirhan Dağhan",
          email : "emirhandaghan@hotmail.com"
        }
      ]
    };
  }
  render (){
    return (
        <div className="container">
          <h5>User App</h5>
          <hr></hr>
          <AddUser/>
          <hr></hr>
          <Users users = {this.state.users}/>
        </div>
    );
  }
}
export default App;
