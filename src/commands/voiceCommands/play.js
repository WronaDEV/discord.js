const Discord = require('discord.js');
const bot = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment');
const voiceDiscord = require('@discordjs/voice');
const { DisTube } = require('distube');
const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ]
  });

module.exports = {
    name: 'play',
    description: 'play',
    args: true,
    usage: 'play',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
            const string = args.join(' ')
            if (!string) return message.channel.send(`Please enter a song url or query to search.`)
            client.distube.play(message.member.voice.channel, string, {
              member: message.member,
              textChannel: message.channel,
              message
            })
    }
} 