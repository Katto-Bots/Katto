const Discord = require("discord.js")

module.exports = {
    name: "kick",
    description: "kick kick",
    run: async(client, message, args) => {
        let kicked = message.mentions.users.first();
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            var embed = new Discord.MessageEmbed()
                .setTitle("**🚫 | Error**")
                .setDescription("You can't use this commmand!")
                .setColor("RED")
                .setTimestamp()
            message.channel.send(embed)
        } else {
            if(!kicked) {
                var embed = new Discord.MessageEmbed()
                    .setTitle("**🚫 | Error**")
                    .setDescription("Missing argument `KICKED_USER`")
                    .setColor("RED")
                    .setTimestamp()
                message.channel.send(embed)
            }
            
            var embed = new Discord.MessageEmbed()
                .setTitle("**You're officially kicked from Katto**")
                .setDescription("Sorry for having to do this but you are officially kicked from Katto. I’ve given many warnings to come to me or have time to be active. Sorry to have you go. I understand if you are busy or have no interest in the squad anymore. If you ever do want to join again don’t be shy to try out for recs or pick ups. You are always welcomed back. Hope you are doing well. You still can rejoin as a guest\ndm <@313263455207424002> if u think it was a mistake.\nhttps://discord.com/invite/MAzMWKd")
                .setColor("RED")
                .setTimestamp()
            kicked.send("https://tenor.com/view/cat-leaving-leave-oops-bye-gif-17519616")
            kicked.send(embed)
    
            var embedv = new Discord.MessageEmbed()
                .setTitle(`**${kicked.username}** was kicked`)
                .setColor("RED")
                .setFooter(`Executed by ${message.author.username}`)
                .setTimestamp()
            message.channel.send(embedv)
            kicked.kick({ reason : "activity"})  
        }
    }
}