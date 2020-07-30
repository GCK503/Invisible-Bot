function ms(seconds) { return seconds * 1000; }

module.exports = {
	name: 'mute',
	description: 'this is the mute command!',
	execute(message, args) {

		const person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
		if(!person) return message.reply('That member is not on this discord server');

		const mainrole = message.guild.roles.cache.get('737163308771311700');
		const muterole = message.guild.roles.cache.get('714121739331698779');

		if(!muterole) return message.reply('There is no mute role!');

		const time = args[2];
		if(!time) {
			return message.reply('Specify a time!');
		}

		person.roles.remove(mainrole.id);
		person.roles.add(muterole.id);

		message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);

		setTimeout(function() {
			person.addRole(mainrole.id);
			person.removeRole(muterole.id);
			message.channel.send(`@${person.user.tag} has been unmuted!`);
		}, ms(time));

	},
};