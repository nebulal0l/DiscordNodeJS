module.exports = {
    name: 'insult',
    description: 'Sends a playful insult.',
    execute(message) {
        const insults = [
            'You bring everyone so much joy… when you leave the room.',
            'You have something on your chin… no, the third one down.',
            'You’re like a software update. Whenever I see you, I think, "Not now."'
        ];
        message.reply(insults[Math.floor(Math.random() * insults.length)]);
    }
};
