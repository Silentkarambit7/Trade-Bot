const { Client , Intents } = require('discord.js');

clientID = ''


const client = new Client({
    intents: [ 
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGESS,
    ]
})

client.on('ready' ,() =>{

})

client.login(process.env.BOT_KEY);
