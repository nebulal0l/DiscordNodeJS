module.exports = {
    name: 'joke',
    description: 'Tells a joke.',
    execute(message) {
        const jokes = [
            'Why don’t skeletons fight each other? They don’t have the guts.',
            'Why did the bicycle fall over? Because it was two-tired!',
            'What do you call fake spaghetti? An impasta!'
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        message.reply(randomJoke);
    }
};
