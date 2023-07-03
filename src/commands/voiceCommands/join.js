const Discord = require('discord.js');
const bot = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment')
const voiceDiscord = require('@discordjs/voice')

module.exports = {
    name: 'join',
    description: 'join',
    args: true,
    usage: 'join',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
            const channel = message.member.voice.channel
            const connection = voiceDiscord.joinVoiceChannel({
                channelId: channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            })
    }
}