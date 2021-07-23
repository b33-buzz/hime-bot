const Discord = require('discord.js');
module.exports = {
    name: 'reactionrole',
    description: "This is setup reaction role!",
    async execute(message, args, Discord, client) {
        const channel = ''
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue Team");

        const yellowTeamEmoji = ':man:';
        const blueTeamEmoji = '🍇';

        let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${yellowTeamEmoji} for yellow team\n`
                + `${blueTeamEmoji} for blue team`);

        let messageEmbed = await message.channel.send(embed);

        client.on('messageReactionAdd', async (reaction, user)=> {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.emoji.name === yellowTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
            }
            if(reaction.emoji.name === blueTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
            } else {
                return;
            }
        });
        
        client.on('messageReactionAdd', async (reaction, user)=> {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.emoji.name === yellowTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
            }
            if(reaction.emoji.name === blueTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
            } else {
                return;
            }
        });
    }
}