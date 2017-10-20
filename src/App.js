import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import GetBook from './components/getBook';
import Feedback from './components/feedback';
import DisplayBook from './components/displayBook';
import AccountControl from './components/accountControl';
import axios from 'axios';



const BOOKS_API_KEY = 'AIzaSyBsYFvtTgy4SF9tju6mx_uzWeotit4bTOQ';
//const neoapi = require('./neo4j-api');

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
var list = generateList('genSubj')
function generateList(type){
  axios.get("http://localhost:3001/neo/" + type)
    .then(function(res){
      console.log("Axios in React - response: " + res.data[0][type]);
      })
    .catch(function(err){
      console.log('generateList failed: ' + err);
    });
}


export default App;
