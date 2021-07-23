const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on("error", console.error);


client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Prefix is: $', {type: "WATCHING"}).catch(console.error)
});


client.on('message', async message => {

	if(message.author.bot)return;
	if(message.channel.type === 'dm') return;
	
	message.member.roles.cache.has
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	try {
		command.execute(message, args, Discord, client, command);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);