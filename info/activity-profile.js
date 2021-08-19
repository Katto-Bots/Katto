const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "activityprofile",
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
          const msg = await message.channel.send(embede)
          await msg.react("ℹ️")
          await msg.react("❌")

      }
      var embed = new Discord.MessageEmbed()
        .setThumbnail(member.avatarURL({dynamic:"gif"}))
        .setTitle("🐱 | Neko Profile")
        .addField("Username:", "<@"+member.id+">", false)
        .addField("Points:", points, false)
        .setFooter("Click on ℹ️ to show activity profile")        
        .setColor(0xa890ee)
        const msg = await message.channel.send(embed)
        await msg.react("ℹ️")
        await msg.react("❌")


    } else {
      if(!points || points === undefined) {
        var embede = new Discord.MessageEmbed()
          .setThumbnail(member.avatarURL({dynamic:"gif"}))
          .setTitle("🐱 | Neko Profile")
          .addField("Username:", "<@"+member.id+">", false)
          .addField("Points:", "0", false)
          .setFooter("Click on ℹ️ to show activity profile")          
          .setColor(0xbf2cff)
        const msg = await message.channel.send(embede)
        await msg.react("ℹ️")
        await msg.react("❌")

      }

      var embed = new Discord.MessageEmbed()
          .setThumbnail(member.avatarURL({dynamic:"gif"}))
          .setTitle("🐱| Neko Profile")
          .addField("Username:", "<@"+member.id+">", false)
          .addField("Points:", points, false)
          .setFooter("Click on ℹ️ to show activity profile")
          .setColor(0xbf2cff)
      const msg = await message.channel.send(embed)
      await msg.react("ℹ️")
      await msg.react("❌")

      client.on('messageReactionAdd', async(reaction, user) =>{
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.emoji.name === 'ℹ️') {
          message.channel.bulkDelete(1)
          let member = message.mentions.users.first() || message.author;
          let str1 = message.member.roles.cache.find(r => r.name === "strike 1")
          let str2 = message.member.roles.cache.find(r => r.name === "strike 2")
          let str3 = message.member.roles.cache.find(r => r.name === "strike 3")
  
              if(str1 && !str2 && !str3) {
                  var embed = new Discord.MessageEmbed()
                      .setTitle("ℹ️ | Activity Profile")
                      .addField("**Name: **", "<@"+member.id+">")
                      .addField("**Strike 1**", "✅", true)
                      .addField("**Strike 2**", "🚫", true)
                      .addField("**Strike 3**", "🚫", true)
                      .setColor("#c70000")
                      .setThumbnail(member.avatarURL({dynamic:"gif"}))
                      .setFooter("Click on 🐱 to show neko profile")
                  const msg = await message.channel.send(embed)
                  await msg.react("🐱")
                  await msg.react("❌")
              }
              if(str2 && str1 && !str3) {
                  var embed = new Discord.MessageEmbed()
                      .setTitle("ℹ️ | Activity Profile")
                      .addField("**Name: **", "<@"+member.id+">")
                      .addField("**Strike 1**", "✅", true)
                      .addField("**Strike 2**", "✅", true)
                      .addField("**Strike 3**", "🚫", true)
                      .setColor("#c70000")
                      .setThumbnail(member.avatarURL({dynamic:"gif"}))
                      .setFooter("Click on 🐱 to show neko profile")
                  const msg = await message.channel.send(embed)
                  await msg.react("🐱")
                  await msg.react("❌")

              }
              if(str3 && str2 && str1) {
                  var embed = new Discord.MessageEmbed()
                      .setTitle("ℹ️ | Activity Profile")
                      .addField("**Name: **", "<@"+member.id+">")
                      .addField("**Strike 1**", "✅", true)
                      .addField("**Strike 2**", "✅", true)
                      .addField("**Strike 3**", "✅", true)
                      .setColor("#c70000")
                      .setThumbnail(member.avatarURL({dynamic:"gif"}))
                      .setFooter("Click on 🐱 to show neko profile")
                  const msg = await message.channel.send(embed)
                  await msg.react("🐱")
                  await msg.react("❌")

              }
              
          
              if(!str1 && !str2 && !str3) {
                  var embed = new Discord.MessageEmbed()
                      .setTitle("ℹ️ | Activity Profile")
                      .addField("**Name: **", "<@"+member.id+">")
                      .addField("**Strike 1**", "🚫", true)
                      .addField("**Strike 2**", "🚫", true)
                      .addField("**Strike 3**", "🚫", true)
                      .setColor("#c70000")
                      .setThumbnail(member.avatarURL({dynamic:"gif"}))
                      .setFooter("Click on 🐱 to show neko profile")
                  const msg = await message.channel.send(embed)
                  await msg.react("🐱")
                  await msg.react("❌")

            }
          }
      })

      client.on('messageReactionAdd', async(reaction, user) =>{
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.emoji.name === '🐱') {
          message.channel.bulkDelete(1)
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
              .addField("Username:", member.username, false)
              .addField("Points:", "0", false)
              .setFooter("Click on ℹ️ to show activity profile")
              .setColor(0xa890ee)
              const msg = await message.channel.send(embede)
              await msg.react("ℹ️")
              await msg.react("❌")

          }
          var embed = new Discord.MessageEmbed()
            .setThumbnail(member.avatarURL({dynamic:"gif"}))
            .setTitle("🐱 | Neko Profile")
            .addField("Username:", member.username, false)
            .addField("Points:", points, false)
            .setFooter("Click on ℹ️ to show activity profile")        
            .setColor(0xa890ee)
            const msg = await message.channel.send(embed)
            await msg.react("ℹ️")
            await msg.react("❌")

        
        } else {
          if(!points || points === undefined) {
            var embede = new Discord.MessageEmbed()
              .setThumbnail(member.avatarURL({dynamic:"gif"}))
              .setTitle("🐱 | Neko Profile")
              .addField("Username:", member.username, false)
              .addField("Points:", "0", false)
              .setFooter("Click on ℹ️ to show activity profile")          
              .setColor(0xbf2cff)
            const msg = await message.channel.send(embede)
            await msg.react("ℹ️")
            await msg.react("❌")
        
          }
    
          var embed = new Discord.MessageEmbed()
              .setThumbnail(member.avatarURL({dynamic:"gif"}))
              .setTitle("🐱| Neko Profile")
              .addField("Username:", member.username, false)
              .addField("Points:", points, false)
              .setFooter("Click on ℹ️ to show activity profile")
              .setColor(0xbf2cff)
          const msg = await message.channel.send(embed)
          await msg.react("ℹ️")
          await msg.react("❌")
          }  
        }
      })
      client.on('messageReactionAdd', async(reaction, user) =>{
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.emoji.name === "❌") {
          message.channel.bulkDelete(1)
        }
      })
    }
  }
}