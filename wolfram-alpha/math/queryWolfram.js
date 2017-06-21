'use strict'

const rp = require('minimal-request-promise')
const fbTemplate = require('claudia-bot-builder').fbTemplate
const parseString = require('xml2js').parseString

var fs = require('fs'),
    xml2js = require 'xml2js'

function askForWeather()  {
    return rp.get('https://api.wolframalpha.com/v2/query?input=weather&appid=LY3LHG-K4QXJ737HJ&async=true')
	.then(response => {
	    const answer = parseString(response) })};

parser = new xml2js.Parser()
fs.readFile answer, (err, data) ->
    parser.parseString data, (err, result) ->
    console.dir result
console.log
