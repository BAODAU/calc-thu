// global variables
'use strict'

const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;
var request = require('request');

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
    const newMessage = new fbTemplate.Text('Xin chào. Buttons: ');


      return newMessage
      .addQuickReply('Stark', 'STARK')
      .addQuickReply('Lannister', 'LANNISTER')
      .addQuickReply('Targaryen', 'TARGARYEN')
      .addQuickReply('None of the above', 'OTHER')
      .get();
      }
});
