'use strict'

const botBuilder  = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

function mainMenu() {
    return new fbTemplate.Button('Đây là những gì bạn làm được')
	.addButton('Hướng dẫn sử dụng', 'EXAMPLE-BUTTON')
  .addButton('Nhập phương trình', 'QUERY-BUTTON')
	.addButton('Xem mã nguồn', 'CODE-BUTTON')
	.get()
}

module.exports = mainMenu
