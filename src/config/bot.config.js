// environment varibles
require('dotenv').config();

// bot configuration
module.exports = {
    options: {
        debug: false
    },
    identity: {
        username: 'your username',
        password: process.env.OAUTH_TOKEN
    },
    channels: [
        'your channel'
    ]
}