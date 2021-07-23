const Discord = require('discord.js');
const embeds = require('./embeds');
module.exports = {
    name: 'ban',
    description: "This is command for ban member",
    
    async execute (bot, message, args) {
        
        const mentionMember = message.mention.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";

        const embed = new Discord.MessageEmbed()
        .setTitle('You were banned from **${message.guild.name}**')
        .setDescription('Reason: ${reason}')
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if(!args[0]) return message.channel.send("You need to specify a user to ban");

        if(!mentionMember) return message.channel.send("This user is not a valid user / no longer in the server");

        if(!mentionMember.bannable) return message.channel.send("I was unable to kick this user!");

        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Successfully banned: " + mentionMember.user.tag));
    }
}