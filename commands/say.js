const { DiscordAPIError } = require("discord.js");
const { execute } = require("./play");
const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: "This is say command!",
    async execute(message, args, client) {
        const messageToSay = args.join(" ");
        const sayEmbed =  new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} says: ${messageToSay}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setColor("BLUE")
        .setTimestamp()
    try {
        message.channel.send(sayEmbed);
    }catch(err){
        console.log(err);
        message.channel.send('I am not able to say that message.');
        }
    }
}