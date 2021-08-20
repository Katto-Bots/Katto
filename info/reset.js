const Discord = require("discord.js")
const fs = require("fs")
const pm2 = require("pm2")

module.exports = {
    name: "reset",
    category: "info",
    aliases: ["reset", "nekosreset"],
    run: async(client, message, args) => {
        let author = message.author;

        try {
            fs.unlinkSync('json.sqlite')
            var embed = new Discord.MessageEmbed()
                .setTitle("**Nekos has been successfully reseted!**")
                .setColor("#c70000")
                .setFooter("This action cannot be undone!")
            message.channel.send(embed)
            console.info(`⚠️ | File 'json.sqlite' was deleted by ${author.tag}`)
            pm2.restart('Katto', (err, proc) => {
                pm2.disconnect()
            })
        } catch (error) {
            message.channel.send(`:x: | ${author} you can't reset nekos since they've been already reseted!`)
        }
    }
}
