module.exports = {
    name: 'reverse',
    description: 'Reverses your text.',
    execute(message, args) {
        if (!args.length) return message.reply('❌ Provide text to reverse!');
        const reversed = args.join(' ').split('').reverse().join('');
        message.reply(`🔄 ${reversed}`); // this command just reverses text
    }
};
