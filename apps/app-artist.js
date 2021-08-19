const Discord = require("discord.js")

module.exports = {
    name:"app-artist",
    description: "pog",
    run: async(client, message, args) => {
        message.delete();
        let member = message.author

        let ig = args[0]
        let reason = args.slice(1).join(" ")
        let katch = client.channels.cache.get('750125684566786168')

        if(!ig) {
            var embed = new Discord.MessageEmbed()
                .setTitle("**:x: | An internal error has occured!**")
                .addField("Missing argument", "**You didn't provide link to your art!**")
                .setColor("RED")
            return message.channel.send(embed)  
        }

        if(!reason) {
            var embed = new Discord.MessageEmbed()
                .setTitle("**:x: | An internal error has occured!**")
                .addField("Missing argument", "**You didn't provide reason why you want to join Katto**")
                .setColor("RED")
            return message.channel.send(embed)  
        }


        var infobed = new Discord.MessageEmbed()
            .setTitle("**:white_check_mark: | We successfully received your application!**")
            .setColor("GREEN")
            .setDescription("Please keep in mind that the application process can take up to **24 hours!** For more information contact Staff team")
        message.channel.send(infobed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })

        var embed = new Discord.MessageEmbed()
            .setTitle("Katto Apps | Artist")
            .addField("**User:**", "<@"+member.id+">")
            .addField("**Link to art:**", ig)
            .addField("**Why would you want to join our squad?**", reason)
            .setColor(0xff35c7)
        const msg = await katch.send(embed)
        await msg.react("✅")
        await msg.react("❌")
        await msg.react("⛔")
        
    }   
}