'use strict'

const botBuilder  = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

function mainMenu() {
    return new fbTemplate.Button('Đây là những gì bạn làm được') //this is what you do
	.addButton('Manual instruction', 'EXAMPLE-BUTTON') //Manual instruction
  .addButton('Please enter equation', 'QUERY-BUTTON') //Enter equation
	.addButton('View the source code', 'CODE-BUTTON') // shows the source code
	.get()
}

module.exports = mainMenu
