const discord = require("discord.js")
const fetch = require("node-fetch")

module.exports = {
    name: "hug",
    category: "fun",
    run: async(client, message, args) => {
        let mentioned = 
            message.guild.member(message.mentions.users.first()) ||
            message.guild.members.cache.get(args[1]) ||
            message.author;
        const embed = new discord.MessageEmbed()
            .setFooter(`Requested by : ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setDescription(`${message.author} had hugged ${mentioned}`)   
            .setTimestamp();
        
        const { url } = await fetch("http://ram.gamearoo.top/api/hug")
            .then((res) => res.json())
            .catch((err) => {
                message.reply(`http://ram.gamearoo.top/api is not responding!`);

                return;
            });
        embed.setImage(url);

        message.channel.send(embed)

    }
}