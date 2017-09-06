import React, {Component} from 'react';

class AccountControl extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='accountControl'>
        <button className='button' id='login'>LOGIN</button>
        <button className='button' id='signup'>SIGN UP</button>
        </div>
    );
  }
}

export default AccountControl;
