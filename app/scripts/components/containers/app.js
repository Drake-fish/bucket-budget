import React from 'react';

export default React.createClass({
  render(){
    return(
          <div className="app">
            {this.props.children}
          </div>
    );
  }
});
