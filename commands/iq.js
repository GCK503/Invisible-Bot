module.exports = {
	name: 'iq',
	description: 'this is the iq command!',
	execute(message, args) {

		message.reply('your iq is ' + Math.floor((Math.random() * 110) + 45) + '!');

	},
};