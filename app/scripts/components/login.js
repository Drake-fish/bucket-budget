import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import Logo from './logo';
import TGroup from 'react-addons-css-transition-group';
export default React.createClass({
  render(){
    return(
      <div className="home">
      <div className="login-nav">
        <Link to="/register">Register</Link>
      </div>
      <Logo/>
      <TGroup
					transitionName="form"
          transitionAppear={true}
          transitionAppearTimeout={2000}
					transitionEnterTimeout={2000}
					transitionLeaveTimeout={2000}>
      <form className='form' onSubmit={this.handleSubmit}>
        <input ref='email' type='text' placeholder='Email'/>
        <input ref='password' type='password' placeholder='Password'/>
        <input type='submit' value='LOGIN'/>
      </form>
      </TGroup>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    store.session.login(email, password);
  }
});
