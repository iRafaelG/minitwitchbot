// environment varibles
require('dotenv').config();

// import node modules
const tmi = require('tmi.js');

// import bot configuration
const botConfig = require('./config/bot.config');

// initialization
const bot = new tmi.client(botConfig);

// events
bot.on("connected", (address, port) => {
    console.log('Connected to: ', address, 'on port: ', port);
});

bot.on("message", (target, context, msg, self) => {
    if (self) return;

    let message = msg.trim();

    if (message.includes("!")) {
        if (message === "!dice") {
            let randomEdge = Math.floor(Math.random() * 6) + 1;
            bot.say(target, 'Your number is: ' + randomEdge);
        }
    }
});

bot.on("join", (channel, username, self) => {
    if (self || isBot(username)) return;

    bot.say(channel, `Bienvenid@ ${username}`).then(response => {
        console.log(response);
    });
});

function isBot(username) {
    bots = ['commanderroot', 'getaffiliated_now', 'llorx_falso', 'lurxx', 'nightbot', 'uehebot', 'scomttv']
    return bots.includes(username);
}

// connect to twitch
bot.connect();

