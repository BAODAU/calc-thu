'use strict'
//todo: add modules

//const viewSource = require('./viewSource')
//const showExample = require('./showExample')
//const queryWolfram = require('./queryWolfram')
const greeting = require('./greeting')

function botFlow(request, originalApiRequest) {
    console.log(JSON.stringify(request))
    originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

    //if (request.text === 'HELLO')
        return greeting(request.sender, originalApiRequest.env.facebookAccessToken)

/*    if (request.text === 'EXAMPLE') {
	return showExample()
    }

	if (request.text === 'QUERY') {
	    //todo: take the query and POST it to wolfram alpha, if the answer is ambiguous, try returning assumptions until use post ACCEPT
	    return queryWolfram()
	}
	if (request.text === 'CODE') {
	//todo: redirect to github repo
	return viewSource()
    }
*/
}
module.exports = botFlow
