const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js');

module.exports = {
    name: 'announce',
    description: "This is announce command!",
    authorPermission: "MANAGE_SERVER",
    execute(message, args, client) {
        const announcement = args.slice(1).join(" ")
        if(!announcement) return message.reply("Please give an announcement!")
        let embed = new Discord.MessageEmbed()
        .setTitle("Announcement!")
        .setDescription(`**${announcement}**`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        message.channel.send(embed);
    }
}