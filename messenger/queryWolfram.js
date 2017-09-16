'use strict'
var APIKEY = process.env.WOLFRAMKEY;
const fbTemplate = require('claudia-bot-builder').fbTemplate
var rp = require('minimal-request-promise');

function queryWolfram(question) {
  return rp.get(`https://api.wolframalpha.com/v2/query?input=${question}&output=JSON&format=plaintext&appid=LY3LHG-K4QXJ737HJ&async=true`)
  .then(response => {
    console.log("YOOOOOOO: %j", response)
    //const answer = JSON.parse(response.body);
    //console.log(answer);
    return new fbTemplate.Text("I finished the flow").get();
  })
/*.catch(err => {
  console.log(err)
  return new fbTemplate.Text("Problem").get();
})*/
}
module.exports = queryWolfram
