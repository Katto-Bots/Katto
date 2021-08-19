const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "rempoints",
    aliases: ["rempoint", "nekorempoints","rempoints"],
    category: "points",
    run: async (client, message, args) => {
      message.delete()
      if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        var embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(":x: Only Leads / Co Leads can use this command.")
        return message.channel.send(embed)
      }

      let member = message.mentions.users.first();

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

      if(args[1] > points) {
        return message.channel.send(":x: | **Selected person doesn't have specified amount of nekos!** (" + args[1] +")" )
      }

      var embed = new Discord.MessageEmbed()
        .setTitle("🐱 Nekos")
        .setColor("#c70000")
        .setThumbnail(member.avatarURL({dynamic:"gif"}))
        .setDescription("**Successfully deleted " + args[1] + " neko points from "+"<@"+member.id+">**"+`\n${reason}`)
        .setFooter(message.author.username, member.avatarURL({dynamic:"gif"}))
      message.channel.send(embed)

      db.add(`points_${member.id}-${message.guild.id}`,`-${args[1]}`)
  }
}