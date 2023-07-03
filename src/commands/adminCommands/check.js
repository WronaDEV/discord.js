const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');
const { lutimesSync } = require('fs');
const moment = require('moment')

module.exports = {
    name: 'check',
    description: 'check',
    args: true,
    usage: 'check',
    aliases: ["user", "sprawdz", "userinfo", "user-info"],
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
            const target = message.mentions.members.first() || message.author
            const member = message.guild.members.cache.get(target.id)
            let role = member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")
            var verify = trueVerify;
            var trueVerify = "✅";
            var falseVerify = "❌";
            if(member.roles.cache.has('966021323778297928')) {
                verify = trueVerify
            } else {
                verify = falseVerify
            }
            const embed = new Discord.MessageEmbed()
            .setTitle(`INFORMACJE O UŻYTKOWNIKU`)
            .setColor('BLUE')
            .addField("Użytkownik", `${member}`)
            .addField("ID", `${member.id}`)
            .addField("Role", `${role}.`)
            .addField("Stworzone", `${moment(target.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** <t:${parseInt(target.createdTimestamp / 1000)}:R>`)
            .addField("Dołączył", `${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** <t:${parseInt(member.joinedTimestamp / 1000)}:R>`)
            .addField("Zweryfikowany", `${verify}`)
            .setThumbnail(member.displayAvatarURL({ dynamic: true }))
            message.channel.send({ embeds: [embed] });
    }
}