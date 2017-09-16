'use strict'
//todo: add modules

const viewSource = require('./viewSource')
const showExample = require('./showExample')
const greeting = require('./greeting')
const beginCalculation = require('./beginCalculation')
const queryWolfram = require('./queryWolfram')
const fbTemplate = require('claudia-bot-builder').fbTemplate
const mainMenu = require('./mainMenu')

function botFlow(request, originalApiRequest) {
    console.log("REQUEST: " + request.body);
    //console.log("ORIGINAL: " + JSON.parse(originalApiRequest));

    var returnValue = null;
    originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

    if (request.text === 'GET_STARTED_PAYLOAD')
        returnValue = greeting(request.sender, originalApiRequest.env.facebookAccessToken)

    if (request.text === 'EXAMPLE_BUTTON') {
    	returnValue = showExample()
        }

    if (request.text === 'QUERY_BUTTON') {
        returnValue = [
          new fbTemplate.Text("Enter something").get(),
          queryWolfram(request.value)
        ]
        }

    	if (request.text === 'CODE_BUTTON') {
    	//todo: redirect to github repo
    	returnValue = viewSource()
        }
      return returnValue;
}

module.exports = botFlow
