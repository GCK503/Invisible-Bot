module.exports = {
	name: 'clear',
	description: 'this is the clear command!, it deletes messages in bulk',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_MESSAGES')) {
			const toDelete = args[0];
			message.reply('suscessfully deleted messages');
			if(!toDelete) return message.channel.send('You must provide an amount of messages to delete (MAX 100 [for now])');
			if(isNaN(toDelete)) return message.channel.send('You must provide an actual number of messages to delete') ;

			if(toDelete > 100) return message.channel.send('You can only delete a maximum of 100 messages [for now:D]');
			message.channel.bulkDelete(toDelete);
		} else {
			message.reply('Sorry but you dont have the permissions to clear messages.');
		}

	},
};