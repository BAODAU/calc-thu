'use strict'
var APIKEY = process.env.WOLFRAMKEY;

const fbTemplate = require('claudia-bot-builder').fbTemplate

function queryWolfram() {
  return new fbTemplate.Text()
    .addQuickReply("I will use " + APIKEY + "to process wolframalpha")
    .get()
}

module.exports = queryWolfram
