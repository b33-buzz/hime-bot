const Discord = require('discord.js');
const disbut = require('discord-buttons');
const math = require('mathjs');
const { execute } = require('./play');
const { validateID } = require('ytdl-core');

module.exports = {
    name: 'calculator',
    description: "This is calculator command!",
    async execute(client, message, args) {

        let button = new Array([], [], [], [], []);
        let row = [];
        let text = ["clear", "(",")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "00", "="];
        let current = 0;

        for(let i = 0; i < text .length; i++) {
            if(button[current].length === 4) current++;
            button[current].push(createButton(text[i]));
            if(i === text.length - 1) {
                for(let btn of button) row.push(addRow(btn));
            }
            return row1;
        }

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription("```0```")

        message.channel.send({
            embed: embed,
            components: row
        }).then((msg) => {
            let isWrong = false;
            let value = "";
            let time = 60000;
            let embed1 = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setColor("BLUE")
            
            function createCollector(val, result = false) {
                let filter = (buttons1) => buttons1.clicker.user.id === message.author.id && buttons1.id === "cal" + val;
                let collect = msg.createButtonCollector(filter, {time:6000});

                client.on("collect", async x => {
                    x.defer();

                    if(result === "new") value = "0"
                    else if (isWrong) {
                        value = val
                        isWrong = false;
                    }
                    else if (result === "0") value = val;
                    else if (result) {
                        isWrong = true
                        value = mathEval(value);
                    }
                    else value += val
                    embed1.setDescription("```" + value + "```")
                    msg.edit({
                        embed: embed1,
                        components: row
                    })
                })
            }

            for(let txt of text) {
                let result;
                if(txt === "clear") result = "new";
                else if (txt === "=") result = "true"
                else result = false
                createCollector(txt, result)
            }

            setTimeout(() => {
                embed1.setDescription("Your time using calculator is running out")
                embed1.setColor("RED")
                msg.edit({
                    embed: embed1
                })
            }, time)

        })

        function addRow(btns) {
            let row1 = new disbut.MessageActionRow()

            for(let btn of btns) {
                row1.addComponent(btn);
            }
            return row1;
        }
        function createButton(label, style = "grey") {
            if(label === 'clear') style = "red"
            else if (label === '.') style = "grey"
            else if (label === '=') style = "green"
            else if (isNaN(label)) style = "purple"

            const btn = new disbut.MessageButton()
            .setLabel(label)
            .setStyle(style)
            .setID("cal" + label)
            return btn;
        }
        function mathEval(input) {
            try {
                let res = math.evaluate(input)
                return res
            } catch {
                return "Wrong input";
            }
        }

    }
}