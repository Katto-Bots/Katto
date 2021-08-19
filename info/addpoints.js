const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "addpoints",
    aliases: ["addpoint","addpoints"],
    category: "points",
    run: async (client, message, args) => {
      message.delete()
      if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        var embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(":x: | **Only Leads / Co Leads can use this command!**")
        return message.channel.send(embed)
      }

      let member = message.mentions.users.first();
      let bot = message.author.bot
      
      if(bot) {
        var embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(":x: | **You can't add nekos to a bot user!**") 
        return message.channel.send(embed)
      }
      if(!member) {
        member = message.author
      }

      if(!args[1]) return message.channel.send(":x: | **You didn't prove required argument!**")
      if(isNaN(args[1])) return message.channel.send(":x: | **You can only use numbers as input!**")

      let reason = args.slice(2).join(" ")

      if(!reason) {
        reason = "No reason specified!"
      }

      let points = db.get(`points_${member.id}-${message.guild.id}`)

      if(!points || points === undefined) {
        points == "0"
      }

      var embed = new Discord.MessageEmbed()
        .setTitle("🐱 Nekos")
        .setColor("#c70000")
        .setThumbnail(member.avatarURL({dynamic:"gif"}))
        .setDescription(`**Congratulations, `+`<@`+member.id+`>` + `! You received ` + args[1] + ` nekos!**\n${reason}`)
        .setFooter(`Added by ${message.author.username}`, message.author.avatarURL({dynamic:"gif"}))
      message.channel.send(embed)

      db.add(`points_${member.id}-${message.guild.id}`,`${args[1]}`)

      var embed = new Discord.MessageEmbed()
        .setTitle("Congratulations!")
        .setDescription(`You received **${args[1]} nekos** from **${message.author.username}**! You have ${points} nekos!`)
        .setColor("#c70000")
      member.send(embed)
  }
}