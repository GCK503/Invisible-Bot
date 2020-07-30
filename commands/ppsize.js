module.exports = {
	name: 'ppsize',
	description: 'this is the ppsize command!',
	execute(message, args) {
		function cycle() {
			var rand = [ '', '=', '==', '====', '======', '========', '========', '=========', '==============', '===============', '================', '=================', '==================', '===================', '===========================' ];
			return rand[Math.floor(Math.random() * rand.length)];
		}
		message.reply('your PPsize is 8' + cycle() + 'D!');
	},
};