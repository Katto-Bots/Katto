const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
    name: "leaderboard",
    aliases: ["leaderboard","nekoleaderboard","leaderboard"],
    category: "points",
    run: async (client, message, args) => {
      message.delete()

      if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        var embede = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(":x: Only Leads / Co Leads can use this command.")
        return message.channel.send(embede)
      }

      const list = client.guilds.cache.get(message.guild.id); 
      const mlist = []
      const ilist = []
      // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
      list.members.cache.forEach(member => mlist.push(member.user.tag));
      list.members.cache.forEach(member => ilist.push(member.user.id));
      //mlist contains all the user's usernames and tags(e.g. MCUniversity#0859), ilist contains all ID's 
      console.log(mlist)
      console.log(ilist)
      let bl = []
      for (let i = 0; i < ilist.length; i++) {
          let bal = await db.get(`points_${ilist[i]}-${message.guild.id}`)
          if (!bal) bal = 0;
          console.log(mlist[i] + " " + bal)
          bl.push(mlist[i] + " " + bal + " points")
      }
      bl.sort(); //function(a, b){return b-a}
        bl.reverse();
        if (bl[0] == undefined) bl[0] = "-"
        if (bl[1] == undefined) bl[1] = "-"
        if (bl[2] == undefined) bl[2] = "-"
        if (bl[3] == undefined) bl[3] = "-"
        if (bl[4] == undefined) bl[4] = "-"
        if (bl[5] == undefined) bl[5] = "-"
        if (bl[6] == undefined) bl[6] = "-"
        if (bl[7] == undefined) bl[7] = "-"
        if (bl[8] == undefined) bl[8] = "-"
        if (bl[9] == undefined) bl[9] = "-"
          let embed = new Discord.MessageEmbed()
          .setTitle("🐱 Neko LeaderBoard")
          .setColor("YELLOW")
          .setDescription(`**1.** ${bl[0]}\n**2.** ${bl[1]}\n**3.** ${bl[2]}\n**4.** ${bl[3]}\n**5.** ${bl[4]}\n**6.** ${bl[5]}\n**7.** ${bl[6]}\n**8.** ${bl[7]}\n**9.** ${bl[8]}\n**10.** ${bl[9]}\n`)
          .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
          .setTimestamp()
          message.channel.send(embed)

    }
}
