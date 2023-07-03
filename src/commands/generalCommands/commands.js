const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'komendy',
    description: 'komendy',
    args: true,
    usage: 'komendy',
    aliases: ["commands"],

    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('KOMENDY')
        .addFields(
            {name: 'Generalne', value: `help, komendy`},
            {name: 'Ekonomia', value: 'balans, prezent, work'},
        )
        message.reply({ embeds: [embed] });
    }
}
