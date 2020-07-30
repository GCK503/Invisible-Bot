module.exports = {
	name: 'epicgamerrate',
	description: 'this is the epicgamerrate command!',
	execute(message, args) {

		message.reply('you are ' + Math.floor(Math.random() * 100) + '% of a epic gamer!');

	},
};