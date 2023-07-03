const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ankieta',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const content = args.slice(0).join(" ")
        const formChannel = client.channels.cache.get('966021324365529206');
        const embed = new Discord.MessageEmbed()
        .setTitle(`Ankieta`)
        .setColor('WHITE')
        .setDescription(`${content}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        if (message.member.permissions.has("ADMINISTRATOR")) {
            const form = await formChannel.send({ embeds: [embed] })
            form.react("✅")
            form.react("❌")
        }
    }
}