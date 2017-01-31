import React from 'react';
import VelocityComponent from 'velocity-react';
export default React.createClass({
  render(){

    return(
          <div className="logo">
            <h1 className="bucket-title">BUCKET</h1>
            <h1 className="budget">BUDGET</h1>
            <ul className="logo-buckets">
              <span className='bucket1'></span>
              <span className='bucket2'></span>
              <span className='bucket3'></span>
              <span className='bucket4'></span>
              <span className='bucket5'></span>
              <span className='bucket6'></span>
              <span className='bucket7'></span>
              <span className='bucket8'></span>
            </ul>

          </div>

    );
  }
})
