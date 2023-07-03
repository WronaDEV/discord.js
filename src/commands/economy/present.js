const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'prezent',
    description: 'prezent',
    args: true,
    usage: 'prezent',
    aliases: ["present"],
    cooldown: 86400000,
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
        run: async(client, message, args) => {
        const member = message.author;
        let present = Math.floor(Math.random()*1000+1)
        const bal = await client.bal(member.id);
        client.add(member.id, parseInt(present));
        const embed = new Discord.MessageEmbed()
        .setAuthor('PREZENT')
        .setColor('BLUE')
        .setDescription(`Otrzymałeś prezent w wysokości: **${present} <:hacker_coin:974417142525079552>** !`)
        .addFields(
            {name: 'Balans:', value: `${bal + present} <:hacker_coin:974417142525079552>`}
        )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        message.reply({ embeds: [embed] });
    }
}