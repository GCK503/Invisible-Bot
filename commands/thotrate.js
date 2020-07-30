module.exports = {
	name: 'thotrate',
	description: 'this is the thotrate command!',
	execute(message, args) {

		message.reply('you are ' + Math.floor(Math.random() * 100) + '% of a thot!');

	},
};