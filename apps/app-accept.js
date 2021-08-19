const Discord = require("discord.js")

module.exports = {
    name: "accept-editor",
    run: async(client, message, args) => {
        let acptch = client.channels.cache.get('717004879947890738')
        let updtch = client.channels.cache.get('800500195229564928')
        let member = message.mentions.users.first();
        
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            var embed = new Discord.MessageEmbed()
              .setColor("RED")
              .setTitle(":x: | **Only Leads / Co Leads can use this command!**")
            return message.channel.send(embed)
        }
        
        if(!member) return message.channel.send("You didnt mention anyone!")

        message.channel.send(":white_check_mark: | Successfully **accepted** member")

        updtch.send("<@"+member.id+">"+" your application has been updated. Check your DMs")
        var embed = new Discord.MessageEmbed()
            .setTitle("**Congratulations " + member.username + " !**")
            .addField("You were accepted as new Katto member!", "Check your DMs. I've sent you link to form you **have to** fill. For more information contact Staft team")
            .setColor("GREEN")
        acptch.send(embed)

        var embed = new Discord.MessageEmbed()
            .setTitle("Welcome to katto!")
            .addField("What now?", "Please fill this form:\nhttps://docs.google.com/forms/d/e/1FAIpQLSc1A9sGiRJ_3IbtXOzJdrZYUdIVpRqAYr9q9t9nzB0_Cm62oQ/viewform?usp=sf_link")
            .addField("I filled the form, what now?", "Now you have to wait. We will review the form and give u New Kats role. Congratulations again!")
            .setColor("GREEN")
        member.send(embed)

    }
}