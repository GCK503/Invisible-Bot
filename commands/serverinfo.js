const Discord = require('discord.js');
const Version = '1.0.2';

module.exports = {
	name: 'serverinfo',
	description: 'this is the serverinfo command!',
	execute(message, args) {

		const Info = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Server Info')
			.setAuthor(message.author.username, message.author.displayAvatarURL())
			.setDescription('This bot is a bot made by GCK503 also known as rock.Five.Entity#6309 on discord')
			.setThumbnail(message.author.displayAvatarURL())
			.addFields(
				{ name: 'Username', value: message.author.username },
				{ name: 'Server', value: message.guild.name, inline: true },
				{ name: 'Member Count', value: message.guild.memberCount, inline: true },
				{ name: 'Server Id', value: message.guild.id, inline: true },
				{ name: 'Role list', value: message.guild.roles.cache.map(r => r.name).join(', '), inline: true },
			)
			.addField('\u200B', '\u200B')
			.addField('Creator\'s Youtube', 'https://www.youtube.com/channel/UCsbAdQ7a3IptP5SO0AgrYMA', true)
			.setTimestamp()
			.setFooter('Subscribe to GCK503 on Youtube', 'https://us-static.z-dn.net/files/dac/cafa4c40fce0ac9de7829ffdc50cf0f1.png');
		message.reply(Info);

	},
};