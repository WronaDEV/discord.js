const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'socialmedia',
    description: 'socialmedia',
    args: true,
    usage: 'socialmedia',

    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('<:flymc:1114270656046039211> Oficjalne konta FlyMC.pl na mediach społecznościowych!')
        .setDescription('TikTok: https://www.tiktok.com/@flymc.pl\nGitHub: https://github.com/FlyMC-pl\n\nZachęcamy do odwiedzenia nas i zaobserwowania ')
        message.channel.send({ embeds: [embed] });
    }
}