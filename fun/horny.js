const Discord = require("discord.js")

module.exports = {
    name: "horny",
    category: "fun",
    aliases: ["howhorny","hornymeter"],
    run: async(client, message, args) => {
        let hornyrate = Math.floor(Math.random() * 101)
        let member = message.author

        if(member.id === "568582683148419093") {
            var embed = new Discord.MessageEmbed()
                .setTitle("Horny meter for horny ppl")
                .setColor("RANDOM")
                .setDescription("Abi, you're are 120% horny so shush")
                .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
            return message.channel.send(embed)
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("Horny meter for horny ppl")
            .setColor("RANDOM")
            .setDescription(`Hei, you're ${hornyrate}% horny uwu`)
            .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
        message.channel.send(embed)

    }
}