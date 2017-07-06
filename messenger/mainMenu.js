'use strict'

const botBuilder  = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

function mainMenu() {
    return new fbTemplate.Button('Đây là những gì bạn làm được')
	.addButton('Xem hướng dẫn sử dụng trước khi dùng', 'EXAMPLE')
  .addButton('Nhập phương trình luôn', 'QUERY')
	.addButton('Xem mã nguồn', 'CODE')
	.get()
}

function waitTime() {
    return new fbTemplate
	.ChatAction('mark_seen')
	.ChatAction('typing_on')
	.get()
}

module.exports = {
    waitTime
    mainMenu
}
