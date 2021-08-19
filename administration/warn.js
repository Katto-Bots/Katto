const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "warn",
    category: "administration",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            var embed = new Discord.MessageEmbed()
                .setTitle(":x: | **You don't have required permissions to execute this command!**")
                .setColor("RED")
            return message.channel.send(embed)
        }

        let member = message.mentions.users.first();
        if(!args[0]) {
            var embed = new Discord.MessageEmbed()
                .setTitle(":x: | **You have to mention someone first!**")
                .setColor("RED")
            return message.channel.send(embed)
        }
        let reason = args.slice(1).join(" ")
        if(!reason) {
            reason = "No reason specified!"
        }
        let ww = +1
        let warns = db.get(`warns_${member.id}-${message.guild.id}`)
       

        var embed = new Discord.MessageEmbed()
            .setTitle(":warning: | **Warn**")
            .setThumbnail(member.avatarURL({dynamic:"gif"}))
            .setColor("#c70000")
            .addField(`**Warned:**`, "<@"+member.id+">")
            .addField("**Responsible moderator:**", "<@"+message.author.id+">")
            .addField("**Reason:**", `${reason}`)
            .setTimestamp()
        message.channel.send(embed)
        db.add(`warns_${member.id}-${message.guild.id}`,`${ww}`)
        
        let logch = client.channels.cache.get('539189057532723220')
        if(!warns || warns === undefined) {
            var embed = new Discord.MessageEmbed()
                .setTitle(":warning: | **Warn**")
                .setThumbnail(member.avatarURL({dynamic:"gif"}))
                .setColor("#c70000")
                .addField(`**Warned:**`, "<@"+member.id+">")
                .addField("**Responsible moderator:**", "<@"+message.author.id+">")
                .addField("**Reason:**", `${reason}`)
                .addField("**Warns received:**", "0")

            return logch.send(embed)
        } else {
            var embed = new Discord.MessageEmbed()
                .setTitle(":warning: | **Warn**")
                .setThumbnail(member.avatarURL({dynamic:"gif"}))
                .setColor("#c70000")
                .addField(`**Warned:**`, "<@"+member.id+">")
                .addField("**Responsible moderator:**", "<@"+message.author.id+">")
                .addField("**Reason:**", `${reason}`)
                .addField("**Warns received:**", warns)
        return logch.send(embed) 
        }
        
    }
}