'use strict'

const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;
const generic = new fbTemplate.Generic();

function showExample() {
    return generic
	.addBubble('Xem hướng dẫn sử dụng trước khi dùng', 'Cách nhập công thức tính toán')
	.addUrl('https://fb-bot.deeweebee.com')
	.addImage('https://github.com/BAODAU/calc-thu/blob/master/assets/img/just-du-it.jpg')
	.get();
}

module.exports = showExample
