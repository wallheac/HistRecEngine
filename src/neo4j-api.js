require('../node_modules/neo4j-driver/lib/browser/neo4j-web.min.js');
var _ = require('lodash');
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));

//create a case statement or other way of determining if generateList()
//is being passed a subject, a time period, or a place
let type = 'GENSUBJ';

//generate drop down lists
//should take an identifier(subj,time,place)
//should return most popular(common?) items and a few random ones
function generateList(type){
  var session = driver.session();
  session
    .run(
      'MATCH(result:type)\
      RETURN result LIMIT 10',
      {genSubj: '(?i).*' + type + '.*'}
    )
    .then(result => {
      result.records.forEach(record => {
        console.log(record.get('genSubj'));
        });
      }
    )
    .catch(error =>{
      session.close();
      throw error;
    });
}

exports.generateList = generateList;
