require("dotenv").config();

// `Client` is the main class for interacting with the Discord API
// `GatewayIntentBits` allows us to list all the events our bot can listen for
const { Client, GatewayIntentBits } = require("discord.js");

// this bot will only get events specified in our new client object
const client = new Client({
    intents: [  
        GatewayIntentBits.Guilds,             // server info/events
        GatewayIntentBits.GuildMessages,      // messages in servers
        GatewayIntentBits.MessageContent,     // the text of messages
        GatewayIntentBits.GuildVoiceStates,   // voice channel events
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// this runs every time a message is created in a channel
// the message param is an object containing message meta-data
client.on('messageCreate', async(message) => {
    if (message.author.bot) return;

    const guild = message.guild;

    if (message.content.trim().toLowerCase() === '!ping') {
        // const channelNames = guild.channels.cache.map(channel => channel.name).join(', ');
        // let voiceChannels = [];

        console.log(guild.channels.cache);

        await message.reply(`Pong!\n${voiceChannels}`);
    }
});

client.login(process.env.DISCORD_TOKEN);