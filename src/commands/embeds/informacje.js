const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'informacje-654645612',
    description: 'embed',
    args: true,
    usage: 'embed',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name + ' - INFORMACJE')
        .setColor('PURPLE')
        .setDescription("**AUTORSKI BOT**\nMamy autorskiego bota, który posiada ekonomie. Po liste komend oraz inne informacje na temat bota wpisz `$help`\n**EKONOMIA**\nPo liste komenda oraz innych przydatnych informacji przydatnych na ekonomii zapraszamy na <#967138035063984188>\n**SYSTEM TICKETÓW**\nSystem ticketów został stworzony by ułatwić pomoc członkom serwera w razie jakiś problemów. Aby stworzyć ticket udaj się na <#966021324688466039>")
        message.channel.send({ embeds: [embed] });
    }
}