'use strict'
//todo: add modules

const viewSource = require('./viewSource')
const showExample = require('./showExample')
const greeting = require('./greeting')
const beginCalculation = require('./beginCalculation')
const queryWolfram = require('./queryWolfram')
const fbTemplate = require('claudia-bot-builder').fbTemplate
const mainMenu = require('./mainMenu')

var lastChat = '';

function botFlow(request, originalApiRequest) {
    console.log("REQUEST: " + request.body);
    //console.log("ORIGINAL: " + JSON.parse(originalApiRequest));

    var returnValue = null;
    originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

    if (request.text === 'GET_STARTED_PAYLOAD')
        returnValue = greeting(request.sender, originalApiRequest.env.facebookAccessToken)

    if (request.text === 'EXAMPLE-BUTTON') {
    	returnValue = showExample()
        }

    if (lastChat === 'QUERY-BUTTON') {
        returnValue = [
          new fbTemplate.Text("OK nhập phương  trình").get(),
          queryWolfram(request.text)
        ]
        }

    	if (request.text === 'CODE-BUTTON') {
    	//todo: redirect to github repo
    	returnValue = viewSource()
        }
      lastChat = request.text;
      return returnValue;
}

module.exports = botFlow
