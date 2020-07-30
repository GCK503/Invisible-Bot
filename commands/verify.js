module.exports = {
	name: 'verify',
	description: 'this is the verify command!',
	execute(message, args) {

		if (message.member.roles.cache.has('737163308771311700')) {
			message.channel.send('you are already verified!');

		} else {
			message.channel.send('You are now verified in ' + message.guild.name);
			message.member.roles.add('737163308771311700').catch(console.error);
		}

	},
};