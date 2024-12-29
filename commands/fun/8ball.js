module.exports = {
    name: '8ball',
    description: 'Answers your question with a magic 8-ball response.',
    execute(message, args) {
        if (!args.length) return message.reply('🎱 Ask a question!');
        const responses = ['Yes.', 'No.', 'Maybe.', 'Ask again later.', 'Definitely.', 'Absolutely not.'];
        const random = responses[Math.floor(Math.random() * responses.length)];
        message.reply(`🎱 ${random}`);
    }
};
