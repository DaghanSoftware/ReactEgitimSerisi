import React, {Component} from "react";

class AddUser extends Component {
    state = {
        name:"",
        email :""
    };
    onNameChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onEmailChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onAddSubmit(e){
        const {AddUser} = this.props;
        const {name,email} = this.state;
        const newUser = {
            id : Math.random(),
            name: name,
            email : email
        }
        console.log("Form Submit");
        AddUser(newUser);
        e.preventDefault();
    }
    
    render(){
        const {name,email} = this.state;
        return (
            <div className="card">
                <h4 className="card-header">Add New User</h4>
                <div className="card-body">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" value={name} onChange={this.onNameChange.bind(this)} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={this.onEmailChange.bind(this)} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">Add New User</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddUser;