'use strict'

const botBuilder  = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

function mainMenu() {
    return new fbTemplate.Button('Choose from the following options:') //this is what you do
	.addButton('Manual instruction', 'EXAMPLE-BUTTON') //Manual instruction
  .addButton('Please enter equation', 'QUERY-BUTTON') //Enter equation
	.addButton('View the source code', 'CODE-BUTTON') // shows the source code
	.get()
}

module.exports = mainMenu
