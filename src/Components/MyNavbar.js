import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import myImage3 from '../assets/Img/logo1.jpg'
import './login.css';

export default class MyNavbar extends Component {
  render() {
    return (
<div>
<div className="f1">
       
        </div>
          
            <div className="f2">

            <div className="f3">
            <h3 className="title">UI Unicorn</h3>
            <img src={myImage3} alt="Logo" style={{ position: 'absolute', left: '110px',top: '75px',width: '30px', height: 'auto'}}/>
              <h3 className="title2" >Nice to see you again</h3>
              <label htmlFor="login">Login:</label><br />
              <input type="text" id="login" name="login" placeholder="Email or phone number" /><br />
              <label htmlFor="password">Password:</label><br />
             
              <input className="pass" type="password" placeholder="Enter password" /><br />
              <h5>Forget Password?</h5>
               
              <div className="button">
                          <input type="button" value="Sign up" onClick={() => console.log('Login clicked')} /><br />
                      </div>
             
                      <p>Don't have an account? sign up now</p>
            </div>
          </div>
        </div>
)}
}
