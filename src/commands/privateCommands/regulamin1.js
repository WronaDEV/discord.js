const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'regulamin1',
    description: 'regulamin1',
    args: true,
    usage: 'regulamin1',

    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('<:flymc:1114270656046039211> REGULAMIN')
        .setDescription('Obecny regulamin serwera minecraft znajduje się na naszej stronie! https://flymc.pl/regulamin')
        message.channel.send({ embeds: [embed] });
    }
}