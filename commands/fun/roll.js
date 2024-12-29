module.exports = {
    name: 'roll',
    description: 'Rolls a dice.',
    execute(message) {
        const dice = Math.floor(Math.random() * 6) + 1;
        message.reply(`🎲 You rolled a ${dice}!`);
    }
};
