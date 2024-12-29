module.exports = {
    name: 'ascii',
    description: 'Converts text to ASCII art.',
    execute(message, args) {
        if (!args.length) return message.reply('❌ Provide text to convert to ASCII!');
        const text = args.join(' ');
        message.reply(`🖋️ ASCII: \`${text}\``); // You can add an ASCII library later, - from starlite :3
    }
};
