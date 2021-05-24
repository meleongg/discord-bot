// must be index.js; package.json looks for index.js as main file

// imports dotenv stuff
require('dotenv-flow').config();

// set all files that are in discord.js
const Discord = require('discord.js');

const prefix = '!';

// instantiating new client object
const bot = new Discord.Client();

// connects to discord DBs
//  process.env.<var> accesses env var name
bot.login(process.env.TOKEN);

// on this event... do this
bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.tag)
});

// paramater = object of type Message
bot.on('message', (msg) => {
    console.log('Message was sent: ' + msg.content);
    if (msg.content.startsWith(prefix)) {
        msg.reply('Your message is so cool!');
    }
    if (msg.content.startsWith(prefix + 'hello')) {
        if (msg.content !== undefined) {
            msg.reply('hi ' + msg.content.trim().split(" ")[1]);
        }
    }
});
