const Discord = 'discord.js';

module.exports = {
    name: 'warn',
    description: "This is warn command!",
    async export(message, args) {
        if(message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You dont have permission to use this command!');
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('I require \`MANAGE_ROLES\` permission to manage a users warnings.')

        const warnRole1 = message.guild.roles.cache.find(role => role.name == '[Warning: 1');
        const warnRole2 = message.guild.roles.cache.find(role => role.name == '[Warning: 2');
        const warnRole3 = message.guild.roles.cache.find(role => role.name == '[Warning: 3');

        if (!warnRole1) await message.guild.roles.create({
            data: {
                name: '[Warning: 1]',
                color: 'GREY'
            }
        }).catch(err => console.log(err));

        if (!warnRole2) await message.guild.roles.create({
            data: {
                name: '[Warning: 2]',
                color: 'GREY'
            }
        }).catch(err => console.log(err));
    
        if (!warnRole3) await message.guild.roles.create({
            data: {
                name: '[Warning: 3]',
                color: 'GREY'
            }
        }).catch(err => console.log(err));

        if(!args[0]) return message.channel.send('You need to state a member a long with if you are just checking');
        if(!mentionMember) return message.channel.send('The member stated is not in the server');
        
        if(mentionMember.roles.cache.has(warnRole1.id)) punishment = 2;
        if(mentionMember.roles.cache.has(warnRole1.id)) punishment = 2;
        if(mentionMember.roles.cache.has(warnRole1.id)) punishment = 2;
        
        if(!['add', 'remove'].includes(args[1])) {
            if (punishment == 1) {
                return message.channel.send(`${mentionMember.user.tag} has no warnings.`);
            } else if (punishment == 2) {
                return message.channel.send(`${mentionMember.user.tag} has one warnings.`);
            } else if (punishment == 3) {
                return message.channel.send(`${mentionMember.user.tag} has two warnings.`);
            } else if (punishment == 4) {
                return message.channel.send(`${mentionMember.user.tag} has three warnings.`);
            }

        } else {
            if(args[1] == 'add') {
                if(punishment == 1) {
                    await mentionMember.roles.add(warnRole1.id);
                    return message
                }
            } else if (args[1] == 'remove') {

            }
        }
        
        
       


    }
}