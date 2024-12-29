module.exports = {
    name: 'kick',
    description: 'Kicks a user.',
    execute(message, args) {
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply('❌ You don’t have permission to kick members!');
        }
        const user = message.mentions.users.first();
        if (user) {
            message.guild.members.kick(user)
                .then(() => message.reply(`✅ Kicked ${user.tag}`))
                .catch(err => message.reply('❌ Unable to kick the user.'));
        } else {
            message.reply('❌ Please mention a user to kick.');
        }
    }
};
