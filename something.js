'use strict'
var APIKEY = 'LY3LHG-K4QXJ737HJ'
var requestPromise = require('minimal-request-promise'),
  options = {
    method: 'POST',
    hostname: 'api.wolframalpha.com',
    path: `/v2/query?input=what+is+the+derivative+of+e^x&appid=${APIKEY}&async=true&output=JSON`,
    port: 443
  }

requestPromise(options).then(
  function (response) {
    console.log("response: ", response.body);
  },
  function(response) {
    console.log('got error', response.body, response.headers);
  }
)

module.exports = requestPromise
