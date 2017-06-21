'use strict'

const rp =require('minimal-request-promise')
const mainMenu = require('mainMenu')

function greeting(sender, facebookAccessToker) {
    return fp.get(`https://graph.facebook.com/v2.6/${sender}?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=${facebookAccessToken}`)
	.then(reponse => {
	    const user = JSON.parse(response.body)
	    return [
		`Xin chào ${user.last_name}. Mình là một calc thủ, hãy đưa cho mình bất kì phương trình nào để mình thử giải cho nè 😎  `,
		`Hiện tại mình chỉ giải được mấy phương trình theo tiếng Anh hoy nha :(`,
		`Đây là những gì bạn có thể làm được`
		mainMenu()
	    ]
	})
}
