'use strict'

const rp =require('minimal-request-promise')
const fbTemplate = require('claudia-bot-builder').fbTemplate
const mainMenu = require('./mainMenu')

function greeting(sender, facebookAccessToken) {
    return rp.get(`https://graph.facebook.com/v2.6/${sender}?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=${facebookAccessToken}`)
	.then(response => {
	    const user = JSON.parse(response.body)
	    return  [
    new fbTemplate.ChatAction('typing_on').get(),
		`Eiiiiii 😎😎😎😎😎! Xin chào người bạn mới`,
    new fbTemplate.Pause(1000).get(),
		`Mình là sản phẩm của 1 project nho nhỏ nên hông có gì thú dị xD`,
    new fbTemplate.ChatAction('typing_on').get(),
    'Đây là những gì mà bạn làm được',
		mainMenu()
	    ]
	})
}

module.exports = greeting
