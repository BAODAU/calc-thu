/*
const botBuilder = require('claudia-bot-builder');
const fbTemplate = require('claudia-bot-builder').fbTemplate;

module.exports = botBuilder(message => {
    if (message.type === 'facebook') {
	const newMessage = new fbTemplate.Text('What\'s your favourite equation?');
	return newMessage
	    .addQuickReply('The integration one', INTEGRATION)
      .addQuickReply('The slopy and trippy one xD', CURVE)
      .addQuickReply('Anything', INCONCLUSIVE)
      .get();
    }
  });
*/

const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
    const generic = new fbTemplate.Generic();

    return generic
      .addBubble('Claudia.js', 'Deploy Node.js microservices to AWS easily')
        .addUrl('https://claudiajs.com')
        .addImage('https://claudiajs.com/assets/claudiajs.png')
        .addButton('Say hello', 'HELLO')
        .addButton('Go to Github', 'https://github.com/claudiajs/claudia')
      .addBubble('Claudia Bot Builder')
      	.addImage('https://claudiajs.com/assets/claudia-bot-builder-video.jpg')
      	.addButton('Go to Github', 'https://github.com/claudiajs/claudia-bot-builder')
      .get();
  }
});
