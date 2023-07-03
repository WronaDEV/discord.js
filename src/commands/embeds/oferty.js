const Discord = require('discord.js');
const { Client, Message, MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    name: 'oferty-5646456456',
    description: 'oferty',
    args: true,
    usage: 'oferty',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
        const member = message.author;
        const bal = await client.bal(member.id);
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setCustomId("random")
            .setLabel("primary")
            .setStyle("PRIMARY")
            .setDisabled(true)
        )
        const embed = new Discord.MessageEmbed()
        .setAuthor('OFERTY')
        .setColor('BLUE')
        .setDescription("Aby kupić daną oferte musisz użyć komendy `$oferta <id>`\n\n **OFERTY**\n **Atak na serwer - NUKE BOT**\nCena: 100 000$\nid: 11\n**Wyświetlenia TikTok**\nCena: 100 000$\nid: 12")
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        message.channel.send({ embeds: [embed] });
    }
}