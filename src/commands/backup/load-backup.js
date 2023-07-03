const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'load-backup',
    description: 'load-backup',
    args: true,
    usage: 'load-backup',
    aliases: ["l-backup", "l-b", "wczytaj-kopie"],

    run: async(client, message, args) => {
        const id = args.join(" ").slice(0);
        const successEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('POPRAWNIE WCZYTANO KOPIE')
        .setDescription("Wszystkie kanały zostały zapisane pomyślnie!")
        .addFields(
            {name: 'ID', value: `${id}`}
        )
        message.reply({ embeds: [successEmbed] });
    }
}