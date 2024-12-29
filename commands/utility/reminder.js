module.exports = {
    name: 'reminder',
    description: 'Sets a reminder.',
    execute(message, args) {
        const time = parseInt(args[0]);
        const reminder = args.slice(1).join(' ');
        if (!time || !reminder) return message.reply('❌ Use: `.reminder [time in seconds] [reminder]`');
        message.reply(`⏰ Reminder set for ${time} seconds.`);
        setTimeout(() => {
            message.reply(`🔔 Reminder: ${reminder}`);
        }, time * 1000);
    }
};
