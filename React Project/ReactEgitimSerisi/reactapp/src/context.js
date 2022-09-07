import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider(Sağlayıcı) , Consumer(Tüketici)

export class UserProvider extends Component {
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
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;

