module.exports = {
    name: 'serverinfo',
    description: 'Displays server information.',
    execute(message) {
        message.reply(`📊 Server Name: ${message.guild.name}\n👥 Total Members: ${message.guild.memberCount}`);
    }
};
