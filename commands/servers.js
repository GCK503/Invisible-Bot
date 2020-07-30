const Discord = require('discord.js');
const Client = new Discord.Client();

module.exports = {
	name: 'servers',
	description: 'this is a server command!',
	execute(bot, message, args) {
		if (message.author.bot || message.channel.type === "dm") return;
		message.channel.send(`I am In ${Client.guilds.cache.size} servers!`);
	},
};