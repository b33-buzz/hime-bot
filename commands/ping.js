const Discord = require('discord.js')

module.exports = {
	name: 'ping',
	description: 'Ping Commands',
	execute(message, args) {
		const ping = new Discord.MessageEmbed()
		.setDescription(`🚦\`${Date.now() - message.createdTimeStamp}\``);

		message.channel.send(ping)
	}
};