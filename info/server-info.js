const Discord = require("discord.js")

module.exports = {
    name: "serverinfo",
    description: "uwu",
    run: async(client, message, args) => {
        // let boosters = message.member.roles.cache.find(r => r.name === "Nitro Booster")
        // let kats = message.member.roles.cache.find(r => r.name === "Kats")
        // const bots = message.member.roles.cache.find(role => role.name == "Bots");

        var embed = new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({dynamic:"gif"}))
            .addField("Owner:", "<@313263455207424002>")
            .addField("Members:", message.guild.memberCount)
            .addField("Region:", message.guild.region, true)
            .addField("Created at:", message.guild.createdAt.toLocaleString() ,true)
            .addField("About Katto", "Server based on Anime/Games, the server is made for the Katto members (kats) but anyone is welcome to join, make new friends and have a great time!", )
            .addField("Active Guests and Kat perks", "Ability to choose any colored role <#851783845145346059>")
            .addField("Nitro Boost Rewards and Perks", "Ability to choose any colored role from <#809159691653480469>\nProject files and presets")
            .setColor(0xc62f2f)
        message.channel.send(embed)
    }
}