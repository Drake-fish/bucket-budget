import React from 'react';
import store from '../../store';
import Header from '../header';
export default React.createClass({

    getInitialState(){
      return{
        bank: store.bank,
        bucket:false

      }
    },
    render(){
      let home;
      if(this.state.bucket){
        home=(
          <div className="home">
            <Header bank={this.state.bank[0]}/>
            <div onClick={this.closeBucket} className="overlay">
            </div>
              <div className="bucket">
                <form onSubmit={this.saveBucket} className="empty-bucket">
                  <input ref="name" type="text" placeholder="Name"/>
                  <input className="amount" ref="amount" type="text" placeholder="$0"/>
                  <input className="submit"  type="submit" value="SAVE"/>
                </form>

            </div>
          </div>
        );
      }else{
        home=(
              <div className="home">
                <i  onClick={this.openBucket}  className="fa fa-plus-square-o" aria-hidden="true"></i>
                <Header bank={this.state.bank[0]}/>
              </div>
        );
      }
    return(<div>


            {home}
          </div>
    );
  },
  openBucket(){
    this.setState({bucket:true});
  },
  closeBucket(){
    this.setState({bucket:false});
  },
  saveBucket(e){
    e.preventDefault();
    let name=this.refs.name.value;
    let amount=this.refs.amount.value;
    this.setState({bucket:false});
    console.log(name,amount);

  }
});
