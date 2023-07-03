const { Client, Message } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { RichEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'bal',
    description: 'bal',
    args: true,
    usage: 'bal',
    aliases: ["balans"],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member;
        const bal = await client.bal(member.id);
        const embed = new Discord.MessageEmbed()
        .setTitle('BALANS')
        .setColor('BLUE')
        .setDescription(`Balans: ${bal} <:hacker_coin:974417142525079552>`)
        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        message.reply({ embeds: [embed] })
    }
}