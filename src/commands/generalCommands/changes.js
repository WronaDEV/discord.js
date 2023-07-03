const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'zmiana',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const change = args.slice(0).join(" ")
        const changesChannel = client.channels.cache.get('966021324365529207');
        if (message.member.permissions.has("ADMINISTRATOR")) {
            changesChannel.send("```" + `${change}` + "```")
        }
    }
}