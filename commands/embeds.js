module.exports = {
    name: 'embeds',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#2791FF')
        .setTitle('Hime Bot')
        .setURL('https://discord.gg/2qaE2FNra9')
        .setAuthor('Dw.Smdr')
        .setDescription('This is information about bot')
        .setImage('https://media.discordapp.net/attachments/806390258777587764/864801438135877682/187808523_3955803364455208_256625356412328486_n.jpg?width=205&height=454')
        .setFooter('Welcome To Hime Squad Games')

        message.channel.send(newEmbed);
    }
}