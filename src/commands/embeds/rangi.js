const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rangi-6546416',
    description: 'rangi',
    args: true,
    usage: 'rangi',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('#F8E6CD')
        .setDescription("**Administracyjne**\n\n<@&966021323778297934> - właściciel serwera\n<@&970413323197755476> - rola zarezerwowana tylko dla serwerowego bota\n<@&966021323778297933> - osoba z wyższymi uprawnieniami, kontrolująca prace niższej administracji\n<@&966021323778297932> - dba on o serwer, w razie problemów to on najczęściej pomaga\n<@&966021323778297931> - kordynuje pracę bota serwerowego\n<@&966021323778297930> - pomaga przy permisjach itp.\n<@&966021323778297929> - moderuje czat")
        message.channel.send({ embeds: [embed] });
    }
}