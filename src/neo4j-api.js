var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;
var cors = require('cors');

var api = express();

api.use(cors());
api.use(logger('dev'));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended:false}));

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
var session =  driver.session();

api.get('/neo/:type', function(req, res){
  let type = req.params.type;
  //putting this in a var for now, but feel like I ought be able to do it in the query itself
  let upperType = type.toUpperCase();
  session
      .run(
        `MATCH(${type}: ${type.toUpperCase()}) RETURN ${type} LIMIT 10`
      )
      .then(result => {
        let resArr = [];
        result.records.forEach(record => {
          console.log(record._fields[0].properties);
            resArr.push({
              id: record._fields[0].identity.low,
              [type]: record._fields[0].properties[type]
            });
         });
           console.log(resArr);
        res.send(resArr);
      })
      .catch(error =>{
        session.close();
        throw error;
     });

});
session.close();
//this is the old logic probably will trash most of it


//create a case statement or other way of determining if generateList()
//is being passed a subject, a time period, or a place

//generate drop down lists
//should take an identifier(subj,time,place)
//should return most popular(common?) items and a few random ones
// function generateList(type){
//   var session = driver.session();
//   session
//     .run(
//       'MATCH(result:type)\
//       RETURN result LIMIT 10',
//       {genSubj: '(?i).*' + type + '.*'}
//     )
//     .then(result => {
//       result.records.forEach(record => {
//         console.log(record.get('genSubj'));
//         });
//       }
//     )
//     .catch(error =>{
//       session.close();
//       throw error;
//    });
//}
api.listen(3001);
console.log("server started on port 3001");

module.exports = api;
