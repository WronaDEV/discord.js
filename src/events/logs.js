const client = require('../index'); /*
const {
    MessageEmbed
} = require('discord.js');

// Channel Topic Updating
client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {
    
    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const TopicUpdate = new MessageEmbed()
        .setTitle('Topic Updated!')
        .setColor('BLUE')
        .setDescription(`${channel} Topic changed from **${oldTopic}** to **${newTopic}**`);

    return LogChannel.send({
        embeds: [TopicUpdate]
    });

});

// Channel Permission Updating
client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const PermissionUpdate = new MessageEmbed()
        .setTitle('Kanał zaaktualizowany')
        .setColor('BLUE')
        .setDescription("Wprowadzono zmiany w " + "`" + channel.name + "`");

    return LogChannel.send({
        embeds: [PermissionUpdate]
    });

})

// unhandled Guild Channel Update
client.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const unhandledGuildChannelUpdate = new MessageEmbed()
        .setTitle('Kanał zaaktualizowany!')
        .setColor('BLUE')
        .setDescription("Wprowadzono zmiany w " + "`" + channel.name + "`");

    return LogChannel.send({
        embeds: [unhandledGuildChannelUpdate]
    });

});

// Member Started Boosting
client.on("guildMemberBoost", (member) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MemberBoost = new MessageEmbed()
        .setTitle('Ulepszenie serwera')
        .setColor('PINK')
        .setDescription(`**${member.user.tag}** ulepszył serwer!`);
    return LogChannel.send({
        embeds: [MemberBoost]
    });

})

// Member Unboosted
client.on("guildMemberUnboost", (member) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MemberUnboost = new MessageEmbed()
        .setTitle('Przerwanie ulepszenia serwera')
        .setColor('RED')
        .setDescription(`**${member.user.tag}** już nie ulepsza serwera!`);

    return LogChannel.send({
        embeds: [MemberUnboost]
    });

})

// Member Got Role
client.on("guildMemberRoleAdd", (member, role) => {
    
    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MemberRoleAdd = new MessageEmbed()
        .setTitle('Otrzyamnie roli')
        .setColor('GREEN')
        .setDescription(`**${member.user.tag}** otrzymał role ${role}`);

    return LogChannel.send({
        embeds: [MemberRoleAdd]
    });

})

// Member Lost Role
client.on("guildMemberRoleRemove", (member, role) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MemberRoleRemove = new MessageEmbed()
        .setTitle('Zabranie roli')
        .setColor('RED')
        .setDescription(`**${member.user.tag}** stracił role ${role}`);

    return LogChannel.send({
        embeds: [MemberRoleRemove]
    });

})

// Nickname Changed
client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MemberNicknameUpdate = new MessageEmbed()
        .setTitle('Nowy nick')
        .setColor('BLUE')
        .setDescription(`${member.user.tag} zmieniony nick z \`${oldNickname}\` na \`${newNickname}\``);

    return LogChannel.send({
        embeds: [MemberNicknameUpdate]
    });

})

// Member Joined
client.on("guildMemberAdd", (member) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MemberJoined = new MessageEmbed()
        .setTitle('Nowy użytkownik')
        .setColor('GREEN')
        .setDescription(`${member.user.tag} dołączył!`);

    return LogChannel.send({
        embeds: [MemberJoined]
    });

})

// Server Boost Level Up
client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const LevelUp = new MessageEmbed()
        .setTitle('Server Boost Level Up')
        .setColor('PINK')
        .setDescription(`${guild.name} reached the boost level ${newLevel}`);

    return LogChannel.send({
        embeds: [LevelUp]
    });

})

// Server Boost Level Down
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const LevelDown = new MessageEmbed()
        .setTitle('Server Boost Level Down')
        .setColor('RED')
        .setDescription(`${guild.name} lost a level from ${oldLevel} to ${newLevel}`);

    return LogChannel.send({
        embeds: [LevelDown]
    });

})

// Banner Added
client.on("guildBannerAdd", (guild, bannerURL) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const BannerAdd = new MessageEmbed()
        .setTitle('Zmieniono baner serwera')
        .setColor('BLUE')
        .setImage(bannerURL)

    return LogChannel.send({
        embeds: [BannerAdd]
    });

})

// AFK Channel Added
client.on("guildAfkChannelAdd", (guild, afkChannel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const AFKAdd = new MessageEmbed()
        .setTitle('Dodano kanał AFK')
        .setColor('BLUE')
        .setDescription(`Kanał AFK: ${afkChannel}`);

    return LogChannel.send({
        embeds: [AFKAdd]
    });

})

// Guild Vanity Add
client.on("guildVanityURLAdd", (guild, vanityURL) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VanityAdd = new MessageEmbed()
        .setTitle('Nowy customowy URL')
        .setColor('GREEN')
        .setDescription(`Nowy URL: ${vanityURL}`);

    return LogChannel.send({
        embeds: [VanityAdd]
    });

})

// Guild Vanity Remove
client.on("guildVanityURLRemove", (guild, vanityURL) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VanityRemove = new MessageEmbed()
        .setTitle('Usunięto customowy URL')
        .setColor('RED')
        .setDescription(`Usunięty URL ${vanityURL}`);

    return LogChannel.send({
        embeds: [VanityRemove]
    });

})

// Guild Vanity Link Updated
client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VanityUpdated = new MessageEmbed()
        .setTitle('Zaaktualizowano customowy URL')
        .setColor('BLUE')
        .setDescription(`Zmieniono custom URL z ${oldVanityURL} na ${newVanityURL}`);

    return LogChannel.send({
        embeds: [VanityUpdated]
    });

})

// Message Pinned
client.on("messagePinned", (message) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MessagePinned = new MessageEmbed()
        .setTitle('Przypięto wiadomość')
        .setColor('BLUE')
        .setDescription("Ta wiadomość została przypięta: \n" + "`" + message.content + "`");

    return LogChannel.send({
        embeds: [MessagePinned]
    });

})

// Message Edited
client.on("messageContentEdited", (message, oldContent, newContent) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const MessageEdited = new MessageEmbed()
        .setTitle('Wiadomość została edytowana')
        .setColor('BLUE')
        .setDescription(`**Przed**\n${oldContent}\n**Po**\n ${newContent}`);

    return LogChannel.send({
        embeds: [MessageEdited]
    });

})
// Role Permission Updated
client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const RolePermissionUpdated = new MessageEmbed()
        .setTitle('Zaaktualizowano permisje roli')
        .setColor('BLUE')
        .setDescription("Permisje" + "`" + role.name + "`" + " z " + oldPermissions + " na " + newPermissions);

    return LogChannel.send({
        embeds: [RolePermissionUpdated]
    });

})

// Avatar Updated
client.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const AvatarUpdated = new MessageEmbed()
        .setTitle('Zaaktualizowano avatar')
        .setColor('BLUE')
        .setDescription(`${user.tag}  ustawił nowy avatar z [Old Avatar](${oldAvatarURL}) na [New Avatar(${newAvatarURL})]`);

    return LogChannel.send({
        embeds: [AvatarUpdated]
    });

})

// Username Updated
client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const Username = new MessageEmbed()
        .setTitle('Nick zaaktualizowany')
        .setColor('BLUE')
        .setDescription(`${user.tag} zaaktualizowal nick z ${oldUsername} do ${newUsername}`);

    return LogChannel.send({
        embeds: [Username]
    });

})

// Discriminator Updated
client.on("userDiscriminatorUpdate", (user, oldDiscriminator, newDiscriminator) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const Discriminator = new MessageEmbed()
        .setTitle('Discriminator Updated')
        .setColor('BLUE')
        .setDescription(`${user.tag} updated thier discriminator from ${oldDiscriminator} to ${oldDiscriminator}`);

    return LogChannel.send({
        embeds: [Discriminator]
    });

})

// Flags Updated
client.on("userFlagsUpdate", (user, oldFlags, newFlags) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const FlagsUpdate = new MessageEmbed()
        .setTitle('Flags Updated')
        .setColor('BLUE')
        .setDescription(`${user.tag} updated thier flags from ${oldFlags} to ${newFlags}`);

    return LogChannel.send({
        embeds: [FlagsUpdate]
    });

})

// Joined VC
client.on("voiceChannelJoin", (member, channel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VCJoined = new MessageEmbed()
        .setTitle('Użytkownik dołączył do czatu głosowego')
        .setColor('GREEN')
        .setDescription(member.user.tag + " dołączył do " + `${channel}`);

    return LogChannel.send({
        embeds: [VCJoined]
    });

})

// Left VC
client.on("voiceChannelLeave", (member, channel) => {
    
    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VCLeft = new MessageEmbed()
        .setTitle('Użytkownik wyszedł z czatu głosowego')
        .setColor('RED')
        .setDescription(member.user.tag + " wyszedł z " + `${channel}`);

    return LogChannel.send({
        embeds: [VCLeft]
    });

})

// VC Switch
client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VCSwitch = new MessageEmbed()
        .setTitle('Przeniesienie na inny kanał głosowy')
        .setColor('BLUE')
        .setDescription("**" + member.user.tag + "**" + " wyszedł z " + "`" + oldChannel.name + "`" + "i dołączył do " + "`" + newChannel.name + "`");

    return LogChannel.send({
        embeds: [VCSwitch]
    });

})

// VC Mute
client.on("voiceChannelMute", (member, muteType) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VCMute = new MessageEmbed()
        .setTitle('User Muted')
        .setColor('RED')
        .setDescription(member.user.tag + " became muted! (type: " + muteType + ")");

    return LogChannel.send({
        embeds: [VCMute]
    });

})

// VC Unmute
client.on("voiceChannelUnmute", (member, oldMuteType) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VCUnmute = new MessageEmbed()
        .setTitle('User Unmuted')
        .setColor('GREEN')
        .setDescription(member.user.tag + " became unmuted!");

    return LogChannel.send({
        embeds: [VCUnmute]
    });

})

// VC Defean
client.on("voiceChannelDeaf", (member, deafType) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VCDeafen = new MessageEmbed()
        .setTitle('User Deafend')
        .setColor('RED')
        .setDescription(member.user.tag + " become deafed!");

    return LogChannel.send({
        embeds: [VCDeafen]
    });

})

// VC Undefean
client.on("voiceChannelUndeaf", (member, deafType) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const VCUndeafen = new MessageEmbed()
        .setTitle('User Undeafend')
        .setColor('GREEN')
        .setDescription(member.user.tag + " become undeafed!");

    return LogChannel.send({
        embeds: [VCUndeafen]
    });

})

// User Started to Stream
client.on("voiceStreamingStart", (member, voiceChannel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const UserStreaming = new MessageEmbed()
        .setTitle('User Started to Stream')
        .setColor('BLUE')
        .setDescription(member.user.tag + " started streaming in " + voiceChannel.name);

    return LogChannel.send({
        embeds: [UserStreaming]
    });
    
})

// User Stopped to Stream
client.on("voiceStreamingStop", (member, voiceChannel) => {

    const LogChannel = client.channels.cache.get('966804159137464360'); // Replace with your channel id
    const UserStoppedStreaming = new MessageEmbed()
        .setTitle('User Stopped to Stream')
        .setColor('BLUE')
        .setDescription(member.user.tag + " stopped streaming in " + voiceChannel.name);

    return LogChannel.send({
        embeds: [UserStoppedStreaming]
    });

})

*/