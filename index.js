const Discord = require('discord.js');

const Client = new Discord.Client();

const fs = require('fs');

Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	Client.commands.set(command.name, command);
}

const {
	prefix,
	words_array,
	bot_info,
} = require('./config.json');

Client.once('ready', () => {
	Client.user.setActivity('Subscribe to GCK503', { type: 'STREAMING' }).catch(console.error);
	console.log('turning on!');
	console.log(`Logged in as ${Client.user.tag}!`);
	Client.channels.cache.get('736777392869081153').send('Turning on!');
});
Client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		Client.commands.get('help').execute(message, args);
	} else if (command == 'youtube') {
		Client.commands.get('youtube').execute(message, args);
	} else if (command == 'verify') {
		Client.commands.get('verify').execute(message, args);
	} else if (command == 'myinfo') {
		Client.commands.get('myinfo').execute(message, args);
	} else if (command == 'simprate') {
		Client.commands.get('simprate').execute(message, args);
	} else if (command == 'howgay') {
		Client.commands.get('howgay').execute(message, args);
	} else if (command == 'iq') {
		Client.commands.get('iq').execute(message, args);
	} else if (command == 'clear') {
		Client.commands.get('clear').execute(message, args);
	} else if (command == 'serverinfo') {
		Client.commands.get('serverinfo').execute(message, args);
	} else if (command == 'mute') {
		Client.commands.get('mute').execute(message, args);
	} else if (command == 'ppsize') {
		Client.commands.get('ppsize').execute(message, args);
	} else if (command == 'thotrate') {
		Client.commands.get('thotrate').execute(message, args);
	} else if (command == 'slutrate') {
		Client.commands.get('slutrate').execute(message, args);
	} else if (command == 'epicgamerrate') {
		Client.commands.get('epicgamerrate').execute(message, args);
	} else if (command == 'kick') {
		Client.commands.get('kick').execute(message, args);
	} else if (command == 'ban') {
		Client.commands.get('ban').execute(message, args);
	} else if(command == 'botinfo') {
		Client.commands.get('botinfo').execute(message, args);
	} else {
		message.channel.send('that is not a proper command say ~help to get help');
	}

});

Client.login(process.env.token);