const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick',
    args: true,
    usage: 'kick',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async(client, message, args) => {
        let member = message.mentions.users.first();
        const kickUser = message.mentions.members.first();
        if(kickUser) user = kickUser.user;
        else user = message.author;
        let kickReason = args.join(" ").slice(22);
        let admin = message.author

        if(!member) {
            message.reply('Musisz oznaczyć osobę którą chcesz wyrzucić z serwera!');
        }

        let kickPermissionError = new Discord.MessageEmbed()
        .setAuthor('Brak permisji!')
        .setColor('RED')
        .setDescription("Nie masz wystarczających uprawnień by wyrzucić "+ kickUser);

        if (!message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send(kickPermissionError);
        }
        if (message.member.permissions.has("KICK_MEMBERS")) {
        const embed1 = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('KICK')
        .setDescription(`No i koniec challengu!`)
        .addField(`Powód:`, `${kickReason}`)
        .addField(`Administrator:`, `${admin}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        kickUser.send(embed1);
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('KICK')
        .setDescription(`Pomyślnie wyrzucono ${kickUser}`)
        .addField(`Powód:`, `${kickReason}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        message.channel.send(embed);
        kickUser.kick()
        }
    }
}