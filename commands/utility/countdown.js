module.exports = {
    name: 'countdown',
    description: 'Starts a countdown.',
    execute(message, args) {
        const count = parseInt(args[0]) || 5;
        let current = count;
        const interval = setInterval(() => {
            if (current === 0) {
                message.channel.send('🎇 Countdown finished!');
                clearInterval(interval);
            } else {
                message.channel.send(`⏳ ${current}`);
                current--;
            }
        }, 1000);
    }
};
