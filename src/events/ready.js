const client = require('../../src/index');
const Discord = require('discord.js');
const { guild } = require('rcnlx/src/projectFiles/question');

client.on('ready', () => {
    console.log('Bot jest Online!')
    client.user.setActivity('BARKA', {type: 'LISTENING'});
    // client.emit("guildMemberAdd", client.guilds.cache.get("966021323778297927").members.cache.get("965985413732925520"))
})