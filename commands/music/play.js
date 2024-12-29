module.exports = {
    name: 'play',
    description: 'Plays a song.',
    execute(message, args) {
        const song = args.join(' ');
        if (!song) return message.reply('🎵 Provide a song name or link!');
        message.reply(`🎧 Playing: ${song}`);
    }
};
