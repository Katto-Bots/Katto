const Discord = require("discord.js")

module.exports = {
    name: "reject-editor",
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

        if(!reason) {
            reason = "No tip provided!"
        }

        if(!member) return message.channel.send("You didnt mention anyone!")

        message.channel.send(":white_check_mark: | Successfully **reapped** member")


        updtch.send("<@"+member.id+">"+" your application has been updated. Check your DMs")

        var embed = new Discord.MessageEmbed()
            .setTitle("**Sorry, but I have bad news " + member.username + " :(**")
            .addField("Your application has been rejected", "But don't worry! You can always reapp, but **make sure you will follow rules this time!**")
            .addField("What do do now?", "As I said, you can reapp, but before you do, you **have to use our logo in new edit without ib or rm!** We are searching for creativty, so please stick to the rules. For more information contact Staff team")
            .addField("Reason for rejection", reason)
            .setColor("RED")
            .setFooter(`Responbile staff member - ${message.author.username}`, message.author.avatarURL({dynamic:"gif"}))
        member.send(embed)

    }
}