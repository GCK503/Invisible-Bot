module.exports = {
	name: 'youtube',
	description: 'Send the youtube link!',
	execute(message, args) {
		message.channel.send('https://www.youtube.com/channel/UCsbAdQ7a3IptP5SO0AgrYMA');
	},
};