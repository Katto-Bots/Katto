const Discord = require("discord.js")

module.exports = {
    name: "reapp-editor",
    run: async(client, message, args) => {
        let updtch = client.channels.cache.get('800500195229564928')
        let member = message.mentions.users.first();
        let reason = args.slice(1).join(" ")

        if(!message.member.hasPermission("KICK_MEMBERS")) {
            var embed = new Discord.MessageEmbed()
              .setColor("RED")
              .setTitle(":x: | **Only Leads / Co Leads can use this command!**")
            return message.channel.send(embed)
        }

        if(!member) return message.channel.send("You didnt mention anyone!")

        if(!reason) {
            reason = "No tip provided!"
        }

        message.channel.send(":white_check_mark: | Successfully **reapped** member")


        updtch.send("<@"+member.id+">"+" your application has been updated. Check your DMs")

        var embed = new Discord.MessageEmbed()
            .setTitle("**Sorry, but I have bad news " + member.username + " :(**")
            .addField("Your application has been rejected", "But don't worry! You can always reapp, but **don't forget that we are searching for unique editors.**")
            .addField("What to do now?", "As I said, you can reapp, but before you do, try to improve or erase the mistakes you make in your edits. For more information contact Staff team")
            .addField("Tip from Staff", reason)
            .setColor("ORANGE")
            .setFooter(`Responbile staff member - ${message.author.username}`, message.author.avatarURL({dynamic:"gif"}))

        member.send(embed)

    }
}