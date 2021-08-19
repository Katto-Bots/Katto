const Discord = require("discord.js")

module.exports = {
    name: "simp",
    category: "fun",
    aliases: ["howsimp","simpmeter"],
    run: async(client, message, args) => {
        let simprate = Math.floor(Math.random() * 101)
        let member = message.author

        var embed = new Discord.MessageEmbed()
            .setTitle("Simp meter for simps")
            .setColor("RANDOM")
            .setDescription(`Hei, you're ${simprate}% simp!!!!!`)
            .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
        message.channel.send(embed)

    }
}
