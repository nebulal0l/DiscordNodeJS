module.exports = {
    name: 'avatar',
    description: 'Displays your avatar.',
    execute(message) {
        message.reply(message.author.displayAvatarURL({ dynamic: true }));
    }
};
