const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        if (message.member.permissions.has("ADMINISTRATOR")) {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('Ping')
            .setDescription(`WebSocket ping is ${client.ws.ping}MS\nMessage edit ping is ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            await message.channel.send({ embeds: [embed] })
            msg.delete()

    }
}
}