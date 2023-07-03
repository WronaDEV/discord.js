const { Client, Message } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { RichEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'buy',
    description: 'buy',
    args: true,
    usage: 'buy',
    aliases: ["kup"],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const author = message.author
        const member = message.guild.members.cache.get(author.id)
        const buyId = args.join(" ")
        const bal = await client.bal(author.id);
        const { guild } = message

        const trueEmbed = new Discord.MessageEmbed()
        .setTitle('KUP')
        .setColor('GREEN')
        .setDescription(`Pomyślnie kupiono przedmiot (${buyId})`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))

        const falseEmbed = new Discord.MessageEmbed()
        .setTitle('KUP')
        .setColor('RED')
        .setDescription(`Nie masz wystarczających środków by kupić (${buyId})`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))

        const error1Embed = new Discord.MessageEmbed()
        .setTitle('KUP')
        .setColor('RED')
        .setDescription(`Nie można kupić tego przedmiotu, ponieważ już go posiadasz (${buyId})`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))

        if(buyId == "11") {
            if(member.roles.cache.has('971006131860299826')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 100000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 100000);
                member.roles.add('971006131860299826')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "12") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 90000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 90000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "13") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 80000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 80000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "14") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 70000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 70000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "15") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 60000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 60000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "16") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 50000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 50000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "17") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 40000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 40000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "18") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 30000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 30000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
        if(buyId == "19") {
            if(member.roles.cache.has('971058071881261108')) {
                message.reply({ embeds: [error1Embed] })
            }
            if(bal >= 20000) {
                message.reply({ embeds: [trueEmbed] })
                client.rmv(author.id, 20000);
                member.roles.add('971058071881261108')
            } else {
                message.reply({ embeds: [falseEmbed] })
            }
        }
    }
}