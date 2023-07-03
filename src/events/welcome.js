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
const ms = require('ms');
const timeSpan = ms('7 days')

client.on('guildMemberAdd', async (member) => {
    const user = member.user
    const alert = new discord.MessageEmbed()
    .setTitle('WERYFIKACJA')
    .setColor('RED')
    .setDescription(`WERYFIKACJA ${user} NIE PRZESZŁA POMYŚLNIE!`)
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
    if(difference < timeSpan) {
        member.send(verDeny)
        alertChannel.send(alert)
     } else {
     member.roles.add('966021323778297928')
     const welcomeChannel = client.channels.cache.find(channel => channel.id === "966021324365529201");
     welcomeChannel.send({ files: [attachment] });
     member.send("Witaj drogi użytkowniku na **1000101**! Na naszym serwerze napewno będziesz bawił się dobrze. Nasz serwer został stworzony aby osoby z niskim budżetem mogły kupić coś z wyższej półki. Po oferty jakie oferujemy naszym użytkownikom wejdź na <#969311145339015198> a po inne przydatne informacje zapraszamy na <#968537169432018997>.")
     member.send(`https://thumbs.gfycat.com/FixedMeaslyBellfrog-size_restricted.gif`)
     }

})