const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "pardon", 
    category: "administration",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            var embed = new Discord.MessageEmbed()
                .setTitle(":x: | **You don't have required permissions to execute this command!**")
                .setColor("RED")
            return message.channel.send(embed)
        }
        
        let member = message.mentions.users.first();
        let warns = db.get(`warns_${member.id}-${message.guild.id}`)
    
        if(!args[1]) return message.channel.send(":x: | **You didn't prove required argument!**")
        if(args[1] === "all") {
        var embed = new Discord.MessageEmbed()
            .setTitle(":warning: | **Pardon**")
            .addField("**User:**", "<@"+member.id+">", false)
            .addField("**Responsible moderator:**", "<@"+message.author.id+">")
            .addField("**Warns left:**", "None")
            .setTimestamp()
            .setColor("#c70000")
        db.delete(`warns_${member.id}-${message.guild.id}`)
        return message.channel.send(embed)
        }
        let reason = args.slice(2).join(" ")

        if(!reason) {
            reason = "No reason specified!"  
        }
        
        if(args[1] > warns) {
            return message.channel.send(":x: | **Selected person doesn't have specified amount of warns!** (" + args[1] +")" )
          }
        var embed = new Discord.MessageEmbed()
            .setTitle(":warning: | **Pardon**")
            .addField("**User:**", "<@"+member.id+">", false)
            .addField("**Responsible moderator:**", "<@"+message.author.id+">")
            .addField("**Warns left:**", warns)
            .setTimestamp()
            .setColor("#c70000")
        db.add(`warns_${member.id}-${message.guild.id}`, `-${args[1]}`)
        message.channel.send(embed)

        
    }
}