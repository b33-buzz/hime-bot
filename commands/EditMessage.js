const { execute, description } = require("./reactionrole")

const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if(reactions.length > 0) {
        setTimeout(() => addReactions(message, reactions), 500)
    }
}

module.exports = {
    name: 'editmessage',
    description: "this is edit message!",
    async execute(client, id, Discord, text) {
        const channel = await client.channel.fetch(id)

        channel.message.fetch().then((message) => {
            if(message.size === 0) {

                channel.send(text).then((message) => {

                    addReactions(message,reactions)
                })

            } else {

                for(const message of messages) {

                    message[1].edit(text)

                    addReactions(message[1], reactions)
                }

            }
        })
    }
}