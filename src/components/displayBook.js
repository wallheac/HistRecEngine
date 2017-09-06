import React, {Component} from 'react';

class DisplayBook extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="main">
        <button className="navButton">prev</button>
        <div className="bookFrame">
            placeholder
          </div>
          <button className="navButton">next</button>
        </div>
      );
  }
}

export default DisplayBook;
