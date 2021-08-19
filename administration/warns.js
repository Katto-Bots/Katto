const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "warns",
    aliases: ["infractions"],
    category: "administration",
    run: async(message, client, args) => {
        let member = message.mentions.users.first() || message.author;
        let warns = db.get(`warns_${member.id}-${message.guild.id}`)

        if(!member) {
            return message.channel.send(":x: | You didn't provide required argument (Mention)")
        }

        if(!warns || warns === undefined) {
            var embed = new Discord.MessageEmbed()
                .setTitle(":warning: | **Warns**")
                .addField("**Username:**", "<@"+member.id+">")
                .addField("**Warns:**", "0")
                .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
                .setThumbnail(member.avatarURL({dynamic:"gif"}))
                .setColor("#c70000")
            return message.channel.send(embed)
        }
        var embed = new Discord.MessageEmbed()
                .setTitle(":warning: | **Warns**")
                .addField("**Username:**", "<@"+member.id+">")
                .addField("**Warns:**", warns)
                .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
                .setThumbnail(member.avatarURL({dynamic:"gif"}))
                .setColor("#c70000")
        message.channel.send(embed)
    }
}