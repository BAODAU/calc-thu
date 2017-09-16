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
		`Hi, how are you?`,
    new fbTemplate.Pause(1000).get(),
		'I hope you are doing well!`,
    new fbTemplate.ChatAction('typing_on').get(),
    	'How can I help you?',
		mainMenu()
	    ]
	})
}

module.exports = greeting
