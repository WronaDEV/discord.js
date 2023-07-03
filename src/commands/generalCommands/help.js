const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help',
    args: true,
    usage: 'help',
    aliases: ["pomoc"],

    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('POMOC')
        .addFields(
            {name: 'Prefix', value: `$`},
            {name: 'Komendy', value: 'Po liste komend użyj komendy `$komendy`'},
        )
        message.reply({ embeds: [embed] });
    }
}
