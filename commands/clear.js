module.exports = {
	name: 'clear',
	description: 'this is the clear command!, it deletes messages in bulk',
	execute(message, args) {

		if(cmd === `${prefix}clear`){
			if (message.deletable) {
				message.delete();
			}
	
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				return message.reply("Missing Permissions!").then(m => m.delete(5000));
			}
	
			if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
				return message.reply("This is not a number").then(m => m.delete(5000));
			}
	
			let deleteAmount;
			if (parseInt(args[0]) > 100) {
				deleteAmount = 100;
			} else {
				deleteAmount = parseInt(args[0]);
			}
	
			message.channel.bulkDelete(deleteAmount, true)
			.catch(err => message.reply(`Something went wrong... ${err}`));
		
		}
	
	})
	

	},
};