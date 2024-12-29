module.exports = {
    name: 'userinfo',
    description: 'Displays user information.',
    execute(message) {
        message.reply(`🧑 Username: ${message.author.username}\n🆔 User ID: ${message.author.id}`);
    }
};
