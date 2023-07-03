const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban',
    args: true,
    usage: 'ban',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async(client, message, args) => {
        let member = message.mentions.users.first();
        const banUser = message.mentions.members.first();
        if(banUser) user = banUser.user;
        else user = message.author;
        let banReason = args.join(" ").slice(22);
        let admin = message.author

        if(!member) {
            message.reply('Musisz oznaczyć osobę którą chcesz zbanować!');
        }

        let banPermissionError = new Discord.MessageEmbed()
        .setAuthor('Brak permisji!')
        .setColor('RED')
        .setDescription("Nie masz wystarczających uprawnień by zbanować " + banUser);

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send(banPermissionError);
        }
        if (message.member.permissions.has("BAN_MEMBERS")) {
        const embed1 = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('BAN')
        .setDescription(`No i koniec challengu!`)
        .addField(`Powód:`, `${banReason}`)
        .addField(`Długość bana:`, `∞`)
        .addField(`Administrator:`, `${admin}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        banUser.send(embed1);
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('BAN')
        .setDescription(`Pomyślnie zbanowano ${banUser}`)
        .addField(`Powód:`, `${banReason}`)
        .addField(`Długość bana:`, `∞`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        message.channel.send(embed);
        banUser.ban()
        }
    }
}