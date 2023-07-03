const Discord = require('discord.js');
const { Client, Message, MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    name: 'sklep',
    description: 'sklep',
    args: true,
    usage: 'sklep',
    aliases: ["shop"],
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
        .setAuthor('SKLEP')
        .setColor('BLUE')
        .setDescription("Aby kupić dany przedmiot ze sklepu musisz użyć komendy `$kup <id>`\n\n<@&971006131860299826>\nCena: 100 000$\nPrzychody: 10 000$\nid: 11\n<@&971003557484585000>\nCena: 90 000$\nPrzychody: 9 000\nid: 12\n<@&971005256953651221>\nCena: 80 000$\nPrzychody: 8 000$\nid: 13\n<@&971004757160386590>\nCena: 70 000$\nPrzychody: 7 000$\nid: 14\n<@&971005583731867669>\nCena: 60 000$\nPrzychody: 6 000$\nid: 15\n<@&971005778867654687>\nCena: 50 000$\nPrzychody: 5 000$\nid: 16\n<@&971004982621012028>\nCena: 40 000$\nPrzychody: 4 000$\nid: 17\n<@&971004513802674256>\nCena: 30 000$\nPrzychody: 3 000$\nid: 18\n<@&971004090458992641>\nCena: 20 000$\nPrzychody: 2 000$\nid: 19")
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        message.reply({ embeds: [embed] });
    }
}