import React from 'react';
import store from '../store';
import Logo from './logo';
import {Link} from 'react-router';
import TGroup from 'react-addons-css-transition-group';
export default React.createClass({
  render(){
    return(
      <div className="register">
      <div className="login-nav">
        <Link to="/">Login</Link>
      </div>
      <Logo/>
      <TGroup
					transitionName="form"
          transitionAppear={true}
          transitionAppearTimeout={2000}
					transitionEnterTimeout={2000}
					transitionLeaveTimeout={2000}>
      <form className='form' onSubmit={this.handleSubmit}>
        <input ref='username' type='text' placeholder='User Name'/>
        <input ref='email' type='email' placeholder='Email'/>
        <input ref='password' type='password' placeholder='Password'/>
        <input ref='confirm' type='password' placeholder='Confirm Password'/>
        <input type='submit' value='Submit'/>
      </form>
      </TGroup>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirm = this.refs.confirm.value;
    if(password===confirm){
      store.session.register(username, email, password);
    } else {
      // alert(password did not match confirmation);
    }
  }
});
