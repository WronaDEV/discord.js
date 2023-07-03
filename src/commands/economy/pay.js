const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'pay',
    aliases: ["zaplac", "zapłać"],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const author = message.author
        const member = message.mentions.members.first() || message.member;
        client.add(member.id, parseInt(args[1]));
        client.rmv(author.id, parseInt(args[1]));
        message.channel.send(`Przelano środki dla ${member}`);
    }
}