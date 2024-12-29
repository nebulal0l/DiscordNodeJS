module.exports = {
    name: 'unmute',
    description: 'Unmutes a user.',
    execute(message) {
        if (!message.member.permissions.has('MUTE_MEMBERS')) {
            return message.reply('❌ You lack the required permissions.');
        }
        const user = message.mentions.members.first();
        if (!user) return message.reply('❌ Mention a user to unmute!');
        user.timeout(null)
            .then(() => message.reply(`🔊 Unmuted ${user.displayName}.`))
            .catch(err => message.reply('❌ Failed to unmute user.'));
    }
};
