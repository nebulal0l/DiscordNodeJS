module.exports = {
    name: 'meme',
    description: 'Sends a random meme.',
    execute(message) {
        const memes = [
            'https://i.imgflip.com/30b1gx.jpg',
            'https://i.imgflip.com/1bij.jpg',
            'https://i.imgflip.com/26am.jpg'
        ];
        const random = memes[Math.floor(Math.random() * memes.length)];
        message.reply(random);
    }
};
