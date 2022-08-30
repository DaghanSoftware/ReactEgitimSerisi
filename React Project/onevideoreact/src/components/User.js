import React,{Component} from "react";

class User extends Component{
    constructor(props){
        super(props);
        this.OnDeleteClick = this.OnDeleteClick.bind(this);
    }
    OnDeleteClick(e){
        console.log("Clicked");
        console.log(this);
    }
    render(){
        const {id,name,email}=this.props;
        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td><button onClick={this.OnDeleteClick} className="btn btn-danger">Delete</button></td>
            </tr>
        )
    }
}
export default User;