var parseString = require('xml2js').parseString;
var rp = require('minimal-request-promise'),
    options = {
	method: 'POST',
	hostname:'api.wolframalpha.com',
	path: '/v2/query?'+ USER_INPUT + '&appID=' + WOLFRAM_API,
	port: '443',
	headers



var xml = 
