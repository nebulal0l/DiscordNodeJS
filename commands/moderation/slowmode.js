module.exports = {
    name: 'slowmode',
    description: 'Sets slow mode in the channel.',
    execute(message, args) {
        const time = parseInt(args[0]) || 0;
        message.channel.setRateLimitPerUser(time)
            .then(() => message.reply(`🐢 Slow mode set to ${time} seconds.`))
            .catch(err => message.reply('❌ Failed to set slow mode.'));
    }
};
