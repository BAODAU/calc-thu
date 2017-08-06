'use strict'

const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;
const generic = new fbTemplate.Generic();

function viewSource() {
    return generic
	.addBubble('Xem mã nguồn mở trên Github', 'Warning: Graphic, You are about to see really messy spaghetti code')
	.addUrl('https://github.com/BAODAU/calc-thu/')
	.addImage('https://raw.githubusercontent.com/BAODAU/calc-thu/master/assets/img/calculus.jpg')
	.get();
}

module.exports = viewSource
