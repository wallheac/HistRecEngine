import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import GetBook from './components/getBook';
import Feedback from './components/feedback';
import DisplayBook from './components/displayBook';
import AccountControl from './components/accountControl'

const BOOKS_API_KEY = 'AIzaSyBsYFvtTgy4SF9tju6mx_uzWeotit4bTOQ';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      book: null
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Title/>
          <AccountControl/>
        </div>
        <div className="content-container">
          <div className="sidebar">
            <GetBook/>
            <Feedback/>
          </div>
          <DisplayBook/>
        </div>
      </div>
    );
  }
}

export default App;
