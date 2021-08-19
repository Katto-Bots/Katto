const Discord = require("discord.js")

module.exports = {
    name: "love",
    category: "fun",
    aliases: ["lovemeter", "howloving"],
    run: async(client, message, args) => {
        let loverate = Math.floor(Math.random() * 101)
        let mentioned = 
            message.guild.member(message.mentions.users.first()) ||
            message.guild.members.cache.get(args[1]) ||
            message.author;
        const embed = new Discord.MessageEmbed()
            .setTitle(":heart: | **Love Meter**")
            .setDescription(`${message.author} loves ${mentioned} for ${loverate}%`)
            .setColor("RANDOM")
        message.channel.send(embed)
    }
}
