import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context';
class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false
    }
  }
  onClickEvent = (e) =>{
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    // Destructing
    const {name,department,salary} = this.props;
    const {isVisible} = this.state;
    return (<UserConsumer>
      {
        value => {
          const {dispatch} = value;

              return (
                <div className='col-md-8 mb-4'>
                  <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                      <h4 className='d-inline' onClick={this.onClickEvent}>{name} </h4>
                      <i className="fa-solid fa-trash-can" style={{cursor:"pointer"}}></i>
                    </div>
                    {
                      isVisible ? <div className='card-body'>
                      <p className='card-text'>Maaş : {salary}</p>
                      <p className='card-text'>Department : {department}</p>
                      
                    </div> : null
                    }
                    
                  </div>
                </div>
              )
            
        }
      }
    </UserConsumer>)

}
User.defaultProps = {
  name : "Bilgi Yok",
  salary : "Bilgi Yok",
  department : "Bilgi yok"
}
User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
}
export default User;
