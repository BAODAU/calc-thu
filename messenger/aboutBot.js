'use strict'

const fbTemplate = require('claudia-bot-builder').fbTemplate

function aboutBot() {
    return [
	`Vài điều về mình - một calc thủ`,
	`Calc thủ sử dụng Wolfram Alpha để tìm câu trả lời`,
new fbTemplate.Button('Tham khảo thêm tại: ')
	    .addButton('Claudia Bot Builder', 'https://github.com/claudiajs/claudia-bot-builder')
	    .addButton('Mã nguồn', 'https://github.com/BAODAU/calc-thu')
	    .get()
    ]
}

module.exports = aboutBot
