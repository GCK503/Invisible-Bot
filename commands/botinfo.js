const Discord = require('discord.js');
const Version = '1.0.2';

module.exports = {
	name: 'myinfo',
	description: 'this is the myinfo command!',
	execute(message, args) {

		const Info = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('User Info')
			.setAuthor(message.author.username, message.author.displayAvatarURL())
			.setDescription('This bot is a bot made by GCK503 also known as rock.Five.Entity#6309 on discord')
			.setThumbnail(message.author.displayAvatarURL())
			.addFields(
				{ name: 'Username', value: message.author.username },
				{ name: 'Version', value: Version, inline: true },
				{ name: 'Discord', value: 'https://discord.gg/yembaXk', inline: true },
				{ name: 'Server', value: message.guild.name, inline: true },
				{ name: 'Bot Name', value: message.member.id, inline: true },
				{ name: 'Servers I\'m in', value: message.guilds.cache.size, inline: true },
			)
			.addField('\u200B', '\u200B')
			.addField('Creator\'s Youtube', 'https://www.youtube.com/channel/UCsbAdQ7a3IptP5SO0AgrYMA', true)
			.setTimestamp()
			.setFooter('Subscribe to GCK503 on Youtube', 'https://us-static.z-dn.net/files/dac/cafa4c40fce0ac9de7829ffdc50cf0f1.png');
		message.reply(Info);

	},
};