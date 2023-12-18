import React, { Component } from 'react'
import Validator from './validator';
import './validation.css'

export default class SignUpComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        Validator({
            form: '#form-2',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
              Validator.isRequired('#email', 'Please enter your email'),
              Validator.isEmail('#email'),
              Validator.isRequired('#password'),
              Validator.minLength('#password', 6),
            ],
            onSubmit: function (data) {
              // Call API
              console.log(data);
            }
          })
    }
  render() {
    return (
      <div style={{boxSizing:'border-box'}}>
        <form action="" method="POST" className="form" id="form-2">
          <h3 className="heading">Sign In Form</h3>
          <p className="desc">Sign in our website</p>
      
          <div className="spacer"></div>
          
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">Name</label>
            <input id="fullname" name="fullname" type="text" placeholder="VD: Nhat Anh" className="form-control"/>
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control"/>
            <span className="form-message"></span>
          </div>
      
    
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input id="password" name="password" type="password" placeholder="Ex: 123456" className="form-control"/>
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="password_confirmation" className="form-label">Enter your password again</label>
            <input id="password_confirmation" name="password_confirmation" placeholder="Enter your password again" type="password" className="form-control"/>
            <span className="form-message"></span>
          </div>
      
          <button className="form-submit">Sign Up</button>
        </form>
      </div>
    )
  }
}
