module.exports = {
    name: 'math',
    description: 'Performs a math operation.',
    execute(message, args) {
        try {
            const result = eval(args.join(' '));
            message.reply(`🧠 The result is: ${result}`);
        } catch {
            message.reply('❌ Invalid math expression!');
        }
    }
};
