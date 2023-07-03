const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: '8498494',
    description: '123',
    args: true,
    usage: '123',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
            const embed = new Discord.MessageEmbed()
            .setTitle('WERYFIKACJA')
            .setColor('BLUE')
            .setDescription("Trwa weryfikacja twojego konta. Może ona zająć od kilku sekund aż po kilka minut.\nW razie problemów lub jeśli weryfikacja będzie trwała zbyt długo możesz utworzyć ticket na <#966021324688466039>. Jeśli weryfikacja przejdzie nie pomyślnie poinformujemy cię o tym w wiadomości prywatnej.")
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            message.channel.send({ embeds: [embed] });
    }
}