import React from 'react';

export default React.createClass({
  render(){
    return(
      <div>
        <nav>
          <input type='button' value='logout'/>
        </nav>
        {this.props.children}
      </div>
    );
  }
});
