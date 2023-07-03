const { Collection, Client } = require('discord.js');
const Discord = require('discord.js')
const discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});
const moment = require('moment')
const logs = require('discord-logs');
logs(client); 
//const schema = require('./schema');
//const mongo = require('mongoose');

//mongo.connect("MONGODB", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
//})

const path = require('path')
const fs = require('fs')
const config = require('./config.json');
module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
});
const ms = require('ms');
const timeSpan = ms('7 days')

client.on('guildMemberAdd', async (member) => {
    const alert = new discord.MessageEmbed()
    .setTitle('WERYFIKACJA')
    .setColor('RED')
    .setDescription(`WERYFIKACJA ${member} NIE PRZESZŁA POMYŚLNIE!`)
    .setTimestamp()
    const verDeny = new discord.MessageEmbed()
    .setTitle('WERYFIKACJA')
    .setColor('RED')
    .setDescription(`❌ WERYFIKACJA NIE PRZESZŁA POMYŚLNIE!`)
    .setTimestamp()
    .setFooter("1000101")
    const alertChannel = client.channels.cache.find(channel => channel.id === "970247862271234058");
    const createdAt = new Date(member.user.createdAt).getTime()
    const difference = Date.now() - createdAt
    // BANNED ID
    var bannedID = ["965985413732925520", "669961091698393143", "752103768958435359", "532220923781316618"];
    if(difference < timeSpan) {
            member.send({ embeds: [verDeny] })
            alertChannel.send({ embeds: [alert] })
     } else {
    if(!member.id === bannedID) {
        setTimeout(() => {
            member.roles.add('966021323778297928')
        }, 3000)
        const welcomeChannel = client.channels.cache.find(channel => channel.id === "966021324365529201");
        // welcomeChannel.send({ files: [attachment] });
        member.send("Witaj drogi użytkowniku na **1000101**! Na naszym serwerze napewno będziesz bawił się dobrze. Nasz serwer został stworzony aby osoby z niskim budżetem mogły kupić coś z wyższej półki. Po oferty jakie oferujemy naszym użytkownikom wejdź na <#969311145339015198> a po inne przydatne informacje zapraszamy na <#968537169432018997>.")
        member.send(`https://thumbs.gfycat.com/FixedMeaslyBellfrog-size_restricted.gif`)
    }}

})
/*
client.on('message', async message =>
{
    const log = message.content;
    const logs = client.channels.cache.find(channel => channel.id === "966804159137464360");
    const embed = new discord.MessageEmbed()
    .setAuthor('SEND MESSAGE')
    .setColor('BLUE')
    .setDescription(`${log}`)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }), message.author.id,)
    if(!message.author.bot) {
        logs.send({ embeds: [embed] });
    }
});
*/
// functions
client.bal = (id) => new Promise(async ful => {
    const data = await schema.findOne({ id });
    if(!data) return ful(0);
    ful(data.coins);
})

client.add = (id, coins) => {
    schema.findOne({ id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;
        } else {
            data = new schema({id, coins })
        }
        data.save();
    })
}
client.rmv = (id, coins) => {
    schema.findOne({ id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;
        } else {
            data = new schema({id, coins })
        }
        data.save();
    })
}

client.login(config.token);