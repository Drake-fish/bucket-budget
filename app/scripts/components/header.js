import React from 'react';

export default React.createClass({
  getInitialState(){
    return{
      dropDown:false,
      slider:false
    }
  },

  render(){
    let dropDown=(
      <div onClick={this.dropDown} className="drop-down">
      <div className="triangle"></div>
      </div>
    );
    if(this.state.dropDown && !this.state.slider){
      dropDown=(
        <div onClick={this.closeDropDown} className="open-drop-down">
          <i onClick={this.openSlider} className="fa fa-ellipsis-v" aria-hidden="true"></i>
          <h3>AVAILIABLE</h3>
          <span>{this.props.bank.balance}</span>
        </div>
      )
      }
      if(this.state.dropDown && this.state.slider){
        dropDown=(
          <div className="open-drop-down">
            <div className="slider">
              <h3 className="send">SEND TO SAVINGS</h3>
            </div>
            <div className="slider-open">
              <i onClick={this.closeSlider} className="open-slide-ellipsis fa fa-ellipsis-v" aria-hidden="true"></i>
              <h3>AVAILIABLE</h3>
              <span>{this.props.bank.balance}</span>
            </div>
          </div>
        );
      }

    console.log(this.props);
    return(
      <div className="header">
        <div className="bank-info">
          <h3 className="title">{this.props.bank.type}</h3>
          <span>${this.props.bank.balance}</span>
          {dropDown}
        </div>
      </div>
    );
  },
  dropDown(){
    this.setState({dropDown:true});
  },
  closeDropDown(){
    this.setState({dropDown:false});
  },
  openSlider(){
    this.setState({slider:true});
  },
  closeSlider(){
    this.setState({slider:false});
  }
});
