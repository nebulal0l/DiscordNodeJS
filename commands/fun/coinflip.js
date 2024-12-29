module.exports = {
    name: 'coinflip',
    description: 'Flips a coin.',
    execute(message) {
        const flip = Math.random() < 0.5 ? 'Heads' : 'Tails';
        message.reply(`🪙 You got ${flip}!`);
    }
};
