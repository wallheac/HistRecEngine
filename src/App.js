import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import GetBook from './components/getBook';
import Feedback from './components/feedback';
import DisplayBook from './components/displayBook';
import AccountControl from './components/accountControl'
import Neo4j from 'neo4j-driver';
import Neo from 'neo4j';

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
//test function for neo4j_api
// function testNeo(){
//   neoapi.generateList('GENSUBJ');
// }
// var test = testNeo();
var testNeo = generateList("GENSUBJ");



function generateList(type){
  var neo4j = require('neo4j-driver').v1;
  var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
//let type = 'GENSUBJ';
  var session = driver.session();
  session
    .run(
      'MATCH(result:type)\
      RETURN result LIMIT 10',
      {genSubj: '(?i).*' + type + '.*'}
    )
  //   .then(result => {
  //     result.records.forEach(record => {
  //       console.log(record.get('genSubj'));
  //       });
  //     }
  //   )
  //   .catch(error =>{
  //     session.close();
  //     throw error;
  //  });
}

export default App;
