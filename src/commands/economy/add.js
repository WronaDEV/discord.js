const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'add',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member;
        const bal = await client.bal(member.id);
        client.add(member.id, parseInt(args[0]));
        message.channel.send("Dodano środki");
    }
}