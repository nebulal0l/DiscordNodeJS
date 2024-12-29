module.exports = {
    name: 'mute',
    description: 'Mutes a user.',
    execute(message) {
        if (!message.member.permissions.has('MUTE_MEMBERS')) {
            return message.reply('❌ You lack the required permissions.');
        }
        const user = message.mentions.members.first();
        if (!user) return message.reply('❌ Mention a user to mute!');
        user.timeout(10 * 60 * 1000) // 10 minutes
            .then(() => message.reply(`🔇 Muted ${user.displayName} for 10 minutes.`))
            .catch(err => message.reply('❌ Failed to mute user.'));
    }
};
