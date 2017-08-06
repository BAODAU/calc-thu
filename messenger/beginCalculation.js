//var APIKEY = process.env.WOLFRAMKEY;
//var wolfram = require('wolfram').createClient(APIKEY)
const botBuilder = require('claudia-bot-builder');
var fbTemplate = botBuilder.fbTemplate;

function beginCalculation() {
  return botBuilder(function(newMes) {
    return 'Thanks for sending ' + newMes.text})}

module.exports = beginCalculation
