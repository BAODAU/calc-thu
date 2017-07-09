// global variables
'use strict'

const botBuilder = require('claudia-bot-builder');
const botFlow = require('./messenger/botFlow');

const api = botBuilder(botFlow, {
    platforms: ['facebook']
});

module.exports = api
