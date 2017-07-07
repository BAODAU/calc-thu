'use strict'
//todo: add modules

const viewSource = require('./viewSource')
const showExample = require('./showExample')


function botFlow(request, originalApiRequest) {
    console.log(JSON.stringify(request))
    originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

    if (request.text === 'EXAMPLE') {
	return showExample()
    }

	if (request.text === 'QUERY') {
    //todo: take the query and POST it to wolfram alpha

	}
	if (request.text === 'CODE') {
	//todo: redirect to github repo
	return viewSource()
    }

module.exports = botFlow
