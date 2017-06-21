'use strict'

const fbTemplate = require('claudia-bot-builder').fbTemplate

function mainMenu() {
    return new fbTemplate.Generic()
	.addBubble(`Cách sử dụng bot`, `Cách nhập các loại phương trình để giải toán`)
	  .addImage('https://raw.githubusercontent.com/BAODAU/calc-thu/assets/images/..............')
	   .addButton('Tính năng hiện tại', 'SHOW_CURRENT_FEATURE')
	   .addButton('Tính năng sắp có', 'SHOW_NEAR_FEATURE')
	   .addButton('Nhập kí hiệu toán', 'MATH_TYPESET')
	.addBubble(`Mình muốn giúp!`, 'Cách giúp tác giả')
	   .addImage('https://raw.githubusercontent.com/BAODAU/calc-thu/assets/images/..............')
	   .addButton('Mình muốn đóng góp code!' , 'GITHUB-REPO')
	   .addButton('Mình muốn mua cà phê cho tác giả', 'COVFEFE')
	   .addButton('Something', 'OPTION 3')
	.addBubble('Chuyện gì đang xảy ra vậy?', 'ABOUT-BOT')
	   .addImage('https://raw.githubusercontent.com/BAODAU/calc-thu/assets/images/..............')
	   .addButton('Đây là người máy hay hay người thật?', 'BOT-QUERY')
	   .addButton('Tôi muốn làm cái gì đó giống cái này' , 'BUILD-BOT')
	.addButton('Những gì bạn đang làm có hợp pháp không?', 'LEGAL-ISSUES')
	.get()
}

module.exports = mainMenu
