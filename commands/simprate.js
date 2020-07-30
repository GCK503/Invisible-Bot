module.exports = {
	name: 'simprate',
	description: 'this is the simprate command!',
	execute(message, args) {

		message.reply('you are ' + Math.floor(Math.random() * 100) + '% of a simp!');

	},
};