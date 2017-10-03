import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../images/pinterest-icon.png';
import './SignUp.css';

class SignUp extends Component {

  render() {
    const { loggedIn } = this.props
    if(!loggedIn) {
      return (
        <div id='sign-up-container'>
          <div id='middle-container'>
            <img className='pinterest-icon' src={logo} alt='pinterest logo'/>
            <h1 className='input-title'>Welcome to Pinterest</h1>
            <form id="sign-up-form">
              <input placeholder='Email' />
              <input placeholder='Password' />
              <button className='pinterest-button sign-up-button'>Continue</button>
            </form>
            OR
            <button className='facebook-login sign-up-button'>Log in with Facebook</button>
            <button className='gmail-login sign-up-button'>Continue with Google</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}
function mapStateToProps(state){
  return {
    loggedIn: state.user.loggedIn
  }
}
export default connect(mapStateToProps, null)(SignUp);
