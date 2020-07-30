module.exports = {
	name: 'slutrate',
	description: 'this is the slutrate command!',
	execute(message, args) {

		message.reply('you are ' + Math.floor(Math.random() * 100) + '% of a slut!');

	},
};