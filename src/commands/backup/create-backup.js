const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const backup = require("discord-backup");

module.exports = {
    name: 'create-backup',
    description: 'create-backup',
    args: true,
    usage: 'create-backup',
    aliases: ["c-backup", "c-b", "stworz-kopie"],

    /**
       * @param {Guild} [Guild] - The discord server you want to backup
       * @param {object} [options] - The backup options
    */

    run: async(client, message, args) => {
        backup.create(message.guild, {
            jsonBeautify: true
        }).then(async backupdata => {
            const successEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('KOPIA')
            .setDescription("Wszystkie kanały zostały zapisane pomyślnie!")
            .addFields(
                {name: 'ID', value: `${backupdata.id}`}
            )
            message.reply({ embeds: [successEmbed] });
        });
    }
}