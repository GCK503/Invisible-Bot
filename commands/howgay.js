module.exports = {
	name: 'howgay',
	description: 'this is the howgay command!',
	execute(message, args) {

		message.reply('you are ' + Math.floor(Math.random() * 100) + '% gay!');

	},
};