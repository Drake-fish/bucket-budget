import Backbone from 'backbone';
import {browserHistory} from 'react-router';

export default Backbone.Model.extend({
  url: 'https://api.backendless.com/v1/data/users',
  //session methods
  register(username, email, password){
    this.save({username, email, password},
    {
      url: 'https://api.backendless.com/v1/users/register',
      success: ()=>{
        this.login(email, password);
      }
    });
  },
  login(login, password){
    this.save(
      {login, password},
      {
        type: 'POST',
        url: 'https://api.backendless.com/v1/users/login',
        success: ()=>{
          console.log('logged-in');
          this.set({login});
          browserHistory.push('/home');
        }
      }
    );
  },
  logout(){
    $.ajax({
      url: 'https://api.backendless.com/v1/users/logout',
      success: () => {
        this.clear();
        browserHistory.push('/login');
      }
    });
  }
});
