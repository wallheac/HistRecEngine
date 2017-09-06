import React, {Component} from 'react';

class Feedback extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="feedback">
        <h2>Give me a new book!</h2>
        <button className="button">surprise me</button>
        <form id="feedbackForm">
        <h3>Same!</h3>
          <div className="checkbox">
            <p>Subject</p>
            <input type="checkbox" name="checkbox" id="sameSubject"></input>
          </div>
          <div className="checkbox">
            <p>Topic</p>
            <input type="checkbox" name="checkbox" id="sameTopic"></input>
          </div>
          <div className="checkbox">
            <p>Time Period</p>
            <input type="checkbox" name="checkbox" id="sameTime"></input>
          </div>
          <h3>Different!</h3>
          <div className="checkbox">
            <p>Subject</p>
            <input type="checkbox" name="checkbox" id="diffSubject"></input>
          </div>
          <div className="checkbox">
            <p>Topic</p>
            <input type="checkbox" name="checkbox" id="diffTopic"></input>
          </div>
          <div className="checkbox">
            <p>Time Period</p>
            <input type="checkbox" name="checkbox" id="diffTime"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Feedback;
