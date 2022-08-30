import React,{ Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  render (){
    return (
        <div>
          <h5>User App</h5>
        </div>
    );
  }
}
export default App;
