import React, { Component } from 'react';
import SignUp from './SignUp';
import './Home.css'
/**
* Home is probably where I should set up the router
* TODO: Set up react-redux-router
**/
class Home extends Component {
  render() {
    return (
      <div id='app-container'>
        <SignUp />
      </div>
    )
  }
}

export default Home;
