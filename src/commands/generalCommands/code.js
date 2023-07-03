const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'code',
    description: 'code',
    args: true,
    usage: 'code',
    aliases: ["kod"],

    run: async(client, message, args) => {
        const member = message.author;
        let suprise = 100
        const code = args.join(" ").slice(0);
        const successEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('POMYŚLNIE WPROWADZONO KOD')
        .setDescription("Odebrano 100 coins!")
        const denyEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('KOD JEST NIEPRAWIDŁOWY')
        .setDescription("Niestety kod jest nieprawidłowy bądź został już użyty :/")
        if (code === "TEST") {
            message.reply({ embeds: [successEmbed] });
            client.add(member.id, parseInt(suprise));
        } else {
            message.reply({ embeds: [denyEmbed] });
        }
    }
}