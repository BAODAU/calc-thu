'use strict'
var APIKEY = 'DEMO'
var requestPromise = require('minimal-request-promise'),
  options = {
    method: 'POST',
    hostname: 'api.wolframalpha.com',
    path: `/v2/query?input=weather&appid=${APIKEY}&async=true&output=JSON`,
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
