const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "profile",
    aliases: ["profile", "nekoprofile","profil"],
    category: "points",
    run: async (client, message, args) => {
      message.delete()
      let member = message.mentions.users.first() || message.author;
      let points = db.get(`points_${member.id}-${message.guild.id}`)
      let newkat = message.member.roles.cache.find(r => r.name === "New Kats")

    if(newkat) {
      var embed = new Discord.MessageEmbed()
        .setTitle("🐱 Since you're a New Kat, you **don't have to do the nekos!**")
        .setColor(0xa890ee)
      message.channel.send(embed)
      if(!points || points === undefined) {
        var embede = new Discord.MessageEmbed()
          .setThumbnail(member.avatarURL({dynamic:"gif"}))
          .setTitle("🐱 | Neko Profile")
          .addField("Username:", "<@"+member.id+">", false)
          .addField("Points:", "0", false)
          .setFooter("Click on ℹ️ to show activity profile")
          .setColor(0xa890ee)
        return message.channel.send(embede)
      }
      var embed = new Discord.MessageEmbed()
        .setThumbnail(member.avatarURL({dynamic:"gif"}))
        .setTitle("🐱 | Neko Profile")
        .addField("Username:", "<@"+member.id+">", false)
        .addField("Points:", points, false)
        .setFooter("Click on ℹ️ to show activity profile")        
        .setColor(0xa890ee)
      return message.channel.send(embed)
        
    
    } else {
      if(!points || points === undefined) {
        var embede = new Discord.MessageEmbed()
          .setThumbnail(member.avatarURL({dynamic:"gif"}))
          .setTitle("🐱 | Neko Profile")
          .addField("Username:", "<@"+member.id+">", false)
          .addField("Points:", "0", false)
          .setFooter("Click on ℹ️ to show activity profile")          
          .setColor(0xbf2cff)
        return message.channel.send(embede)
      }

      var embed = new Discord.MessageEmbed()
          .setThumbnail(member.avatarURL({dynamic:"gif"}))
          .setTitle("🐱| Neko Profile")
          .addField("Username:", "<@"+member.id+">", false)
          .addField("Points:", points, false)
          .setFooter("Click on ℹ️ to show activity profile")
          .setColor(0xbf2cff)
      return message.channel.send(embed)

    }
  }
}