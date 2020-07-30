module.exports = {
	name: 'ban',
	description: 'this is the ban command!',
	execute(message, args) {
		if (message.member.hasPermission('BAN_MEMBERS')) {
			// Ignore messages that aren't from a guild
			if (!message.guild) return;

			// If the message content starts with "!ban"
			// Assuming we mention someone in the message, this will return the user
			// Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
			const user = message.mentions.users.first();
			// If we have a user mentioned
			if (user) {
			// Now we get the member from the user
				const member = message.guild.member(user);
				// If the member is in the guild
				if (member) {
				/**
						 * ban the member
						 * Make sure you run this on a member, not a user!
						 * There are big differences between a user and a member
						 */
					member
						.ban('Optional reason that will display in the audit logs')
						.then(() => {
						// We let the message author know we were able to banned the person
							message.reply(`Successfully banned ${user.tag}`);
						})
						.catch(err => {
						// An error happened
						// This is generally due to the bot not being able to banned the member,
						// either due to missing permissions or role hierarchy
							message.reply('I was unable to ban the member');
							// Log the error
							console.error(err);
						});
				} else {
				// The mentioned user isn't in this guild
					message.reply('That user isn\'t in this guild!');
				}
			// Otherwise, if no user was mentioned
			} else {
				message.reply('You didn\'t mention the user to ban!');
			}
		} else {
			message.reply('Sorry but you dont have the permissions to ban memebers.');
		}

	},
};