const Discord = require('discord.js');
const Version = '1.0.2';

module.exports = {
	name: 'poll',
	description: 'this is the myinfo command!',
	execute(message, args) {

		const Info = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Initate Poll')
			.setDescription('~poll to start a yes or no poll');

		if (!args[1]) {
            message.channel.send(Info);
        }
        
        let messageArgs = args.slice(1).join('');

        message.channel.send( '📝 ' + '**' + messageArgs + '**' ).then(Discord.MessageReaction => {
            MessageReaction.react('👍');
            MessageReaction.react('👎');
            message.delete(5000).catch(console.error);
        });
	},
};