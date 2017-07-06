'use strict'
//todo: add modules


function botFlow(request, originalApiRequest) {
    console.log(JSON.stringify(request))
    originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

    if (request.text === 'EXAMPLE')
	//todo:add example website

    if (request.text === 'QUERY')
    //todo: take the query and POST it to wolfram alpha

    if (request.text === 'CODE')
      //todo: redirect to github repo
    }

module.exports = botFlow
