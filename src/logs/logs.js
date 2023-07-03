const discord = require("discord.js")
const bot = new discord.Client();

client.on('message', async message =>
{
    const author = message.author;
    const log = message.content;
    const logs = client.channels.cache.find(channel => channel.id === "958743352717742112");
    if(!message.author.bot) {
        logs.send(`${author}: ${log}`);
    }
});