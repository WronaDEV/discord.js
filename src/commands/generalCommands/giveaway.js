const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const ms = require('ms');
const giveawayTime = ms('7 days')

module.exports = {
    name: 'giveaway',
    aliases: ["konkurs"],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const content = args.slice(0).join(" ")
        const giveawayChannel = client.channels.cache.get('968593389148852244');
        const embed = new Discord.MessageEmbed()
        .setTitle(`Konkurs`)
        .setColor('WHITE')
        .setDescription(`${content}\n\nZareaguj 🎉 aby wziąć udział w konkursie\n**Pozostało: ** 3 dni`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        if (message.member.permissions.has("ADMINISTRATOR")) {
            const giveaway = await giveawayChannel.send({ embeds: [embed] })
            giveaway.react("🎉")
        }
    }
}