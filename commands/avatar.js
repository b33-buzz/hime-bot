const { DiscordAPIError } = require("discord.js");
const { execute } = require("./reactionrole");
const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: "This is avatar command!",
    async execute(message, args, Discord) {
        let mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionMember) mentionMember = message.member;

        const avatarEmbed = new Discord.MessageEmbed()
            .setTitle(mentionMember.user.tag + "'s Avatar")
            .setImage(mentionMember.user.displayAvatarURL());

        message.channel.send(avatarEmbed);
    }
}