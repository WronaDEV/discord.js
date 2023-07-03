const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hacking',
    description: 'hacking',
    args: true,
    usage: 'hacking',
        /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
         run: async(client, message, args) => {
        let msg = await message.channel.send("HACKING!")
        var i = 0;
        let hacking = [
            "0000000",
            "1000101",
            "1010101",
            "0111001",
            "1010100",
            "1001001",
            "1110101",
            "1000111",
            "0101000",
            "1000100",
            "1010100",
            "1111001",
            "1010111",
            "1001100",
            "1111000",
            "1001101",
            "1010111",
            "1111101",
            "1111111"
        ]
        while(i < 999999999999)
        {
        msg.edit(hacking[Math.floor(Math.random()*19)])
        i++
        }
    }
}