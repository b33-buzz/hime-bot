const Discord = require('discord.js');
module.exports = {
    name: 'verify',
    description: 'This is verify!',
    async execute(message, args) {
        if(message.member.roles.cache.has('MANAGE_ROLES')) return message.channel.send("I require \`MANAGE_ROLES\` permission.");

        const role = message.guild.roles.cache.get('865231738636730419');

        await message.member.roles.add(role.id).catch(err => console.log(err));
    }

}