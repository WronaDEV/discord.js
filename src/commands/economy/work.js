const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'work',
    description: 'work',
    args: true,
    usage: 'work',
    aliases: ["pracuj", "praca"],
    cooldown: 60000,
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
            const member = message.author;
            let work = Math.floor(Math.random()*100+1)
            const bal = await client.bal(member.id);
            client.add(member.id, parseInt(work));
            const embed = new Discord.MessageEmbed()
            .setAuthor('PRACA')
            .setColor('BLUE')
            .setDescription(`Ciężko pracowałeś i zarobiłeś **${work} <:hacker_coin:974417142525079552>**!`)
            .addFields(
                {name: 'Balans:', value: `${bal + work} <:hacker_coin:974417142525079552>`}
            )
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
            message.reply({ embeds: [embed] });
    }
}