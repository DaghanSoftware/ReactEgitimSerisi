import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider(Sağlayıcı) , Consumer(Tüketici)
//Action Nedir , Dispatch Nedir , Reducer Nedir
const reducer =(state,action) => {
  switch(action.type){
    case "DELETE_USER":
      return {
        ...state,
        users:state.users.filter(user=>action.payload !== user.id)
      }
    default:
      return state
  }
}
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
            department : "Servis"
          },
          {
            id: 3,
            name: "Burak Alak",
            salary : "2500",
            department : "Öğrenci"
          }
        ],
        dispatch:action =>{
          this.setState(state=>reducer(state,action))
        }
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

