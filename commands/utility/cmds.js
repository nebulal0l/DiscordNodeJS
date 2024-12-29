module.exports = {
    name: 'cmds',
    description: 'Lists all commands.',
    execute(message) {
        const helpMessage = `
📚 **Available Commands:**

🛠️ **General:**
- \`.ping\` - Check bot latency
- \`.hello\` - Greet the bot
- \`.serverinfo\` - Get server information
- \`.userinfo\` - Get your user information
- \`.roll\` - Roll a dice
- \`.coinflip\` - Flip a coin
- \`.joke\` - Hear a joke
- \`.cmds\` - Show this help message

🎉 **Fun:**
- \`.8ball [question]\` - Ask the magic 8-ball
- \`.meme\` - Get a random meme
- \`.ascii [text]\` - Convert text to ASCII
- \`.reverse [text]\` - Reverse your text
- \`.insult\` - Get a playful insult

🔧 **Utility:**
- \`.avatar\` - Show your avatar
- \`.countdown [number]\` - Start a countdown
- \`.math [expression]\` - Solve a math problem
- \`.reminder [time] [reminder]\` - Set a reminder

🛡️ **Moderation:**
- \`.kick [@user]\` - Kick a user
- \`.ban [@user]\` - Ban a user
- \`.mute [@user]\` - Mute a user
- \`.unmute [@user]\` - Unmute a user
- \`.slowmode [seconds]\` - Set slow mode in the channel

🎵 **Music:**
- \`.play [song]\` - Play a song
- \`.stop\` - Stop the music
- \`.skip\` - Skip the current song

✅ **Admin:**
- \`.clear [number]\` - Clear messages in the chat

Use \`.cmds [command]\` for more details on a specific command.
        `;
        message.reply(helpMessage);
    }
};
