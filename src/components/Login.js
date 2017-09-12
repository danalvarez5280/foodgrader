import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  };

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  }


  render() {
    return(
      <div>
        <form>
          <input
            title='email' type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabInfo(e)} />
          <input
            title='password' type="password" value={this.state.password}
            placeholder="password"
            onChange={(e) => this.grabInfo(e)} />
          <button className='form-button'>
              Log In
          </button>
        </form>
      </div>
    )
  }
};

export default Login;
