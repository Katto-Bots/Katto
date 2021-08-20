const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["help","nekohelp","helplist"],
    category: "points",
    run: async (client, message, args) => {
    
    if(args[0] === undefined) {
      var embed = new Discord.MessageEmbed()
        .setTitle("🐱 Help")
        .setColor("yellow")
        .addField("**Fun**", "`horny` | `rps` | `love` | `simp`")
        .addField("**Nekos**", "`nekoprofile` | `leaderboard` | `addpoints` | `rempoints`")
        .addField("**Apps**", "`app-editor` | `app-artist`")
        .addField("**Admin**", "`warn` | `warns` | `pardon`")
        .addField("**Info**", "`serverinfo`")
        .setFooter("Tip | For additional help use kat help <name of command>")
        .setColor("RANDOM")
      message.channel.send(embed)
    }

    // **Nekos**

    //nekoprofile
    if(args[0] === "nekoprofile") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help for command **Neko profile**")
        .setColor("YELLOW")
        .addField("**Name**", "`Neko profile`")
        .addField("**Usage**", "`kat nekoprofile`")
        .addField("**Description**", "`This command will show you your neko profile`")
        .addField("**Aliases**", "`profile, nekoprofile, profil`")
      message.channel.send(embed)
    }

    //leaderboard
    if(args[0] === "leaderboard") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help for command **Leaderboard**")
        .setColor("YELLOW")
        .addField("**Name**", "`Leaderboard`")
        .addField("**Usage**", "`kat leaderboard`")
        .addField("**Description**", "`This commad will show you nekos leaderboard`")
        .addField("**Aliases**", "`nekoleaderboard`")
        .addField("**Required permissions**", "`MANAGE_MESSAGES`")
      message.channel.send(embed)
    }

    //addpoints
    if(args[0] === "addpoints") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help for command **Add points**")
        .setColor("YELLOW")
        .addField("**Name**", "`Add points`")
        .addField("**Usage**", "`kat addpoints`")
        .addField("**Description**", "`This command will add nekos to selected person`")
        .addField("**Aliases**", "`addpoint`")
        .addField("**Required permissions**", "`MANAGE_MESSAGES`")
      return message.channel.send(embed)
    }

    //rempoints
    if(args[0] === "rempoints") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help for command **Remove points**")
        .setColor("YELLOW")
        .addField("**Name**", "`Remove points`")
        .addField("**Usage**", "`kat rempoints`")
        .addField("**Description**", "`This command will remove nekos from selected person`")
        .addField("**Aliases**", "`rempoint`")
        .addField("**Required permissions**", "`MANAGE_MESSAGES`")
      return message.channel.send(embed)
    }
    
    //**Admin**

    //warn
    if(args[0] === "warn") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help for command **Warn**")
        .setColor("RED")
        .addField("**Name**", "`Warn`")
        .addField("**Usage**", "`kat warn`")
        .addField("**Description**", "`This command will warn selected person`")
        .addField("**Aliases**", "`None`")
        .addField("**Required permissions**", "`KICK_MEMBERS`")
      return message.channel.send(embed)
    }

    //warns
    if(args[0] === "warns") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help for command **Warns**")
        .setColor("RED")
        .addField("**Name**", "`Warns`")
        .addField("**Usage**", "`kat warns`")
        .addField("**Description**", "`This command will show you how many warns you have`")
        .addField("**Aliases**", "`infractions`")
      return message.channel.send(embed)
    }

    //pardon
    if(args[0] === "pardon") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **Pardon**")
        .setColor("RED")
        .addField("**Name**", "`Pardon`")
        .addField("**Usage**", "`kat pardon`")
        .addField("**Descritpion**", "`This command will remove warns from selected person`")
        .addField("**Aliases**", "`None`")
        .addField("**Required permissions**", "`KICK_MEMBERS`")
      return message.channel.send(embed)
    }

    // **Apps**

    //app-editor
    if(args[0] === "app-editor") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **app-editor**")
        .setColor(0xa890ee)
        .addField("**Name**", "`App editor`")
        .addField("**Usage**", "`kat app-editor`")
        .addField("**Description**", "`This commmand will create application for Katto group`")
        .addField("**Aliases**", "`None`")
      return message.channel.send(embed)
    }

    //app-artist
    if(args[0] === "app-artist") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **app-artist**")
        .setColor(0xa890ee)
        .addField("**Name**", "`App artist`")
        .addField("**Usage**", "`kat app-artist`")
        .addField("**Description**", "`This commmand will create application for Katto group`")
        .addField("**Aliases**", "`None`")
      return message.channel.send(embed)
    }

    // **Fun**

    //horny
    if(args[0] === "horny") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **horny**")
        .setColor(0xa890ee)
        .addField("**Name**", "`Horny meter`")
        .addField("**Usage**", "`kat horny`")
        .addField("**Description**", "`This commmand will show you how horny you are`")
        .addField("**Aliases**", "`howhorny, hornymeter`")
        .setColor(0x7dc776)
      return message.channel.send(embed)
    }

    //rps
    if(args[0] === "rps") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **RPS**")
        .setColor(0xa890ee)
        .addField("**Name**", "`Rock, paper, scissors`")
        .addField("**Usage**", "`kat rps`")
        .addField("**Description**", "`This commmand will start a game of rock, paper, scissors`")
        .addField("**Aliases**", "`None`")
        .setColor(0x7dc776)
      return message.channel.send(embed)
    }

    //simp
    if(args[0] === "simp") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **Simp**")
        .setColor(0xa890ee)
        .addField("**Name**", "`Simp`")
        .addField("**Usage**", "`kat simp`")
        .addField("**Description**", "`This command will show you how big of a simp you are`")
        .addField("**Aliases**", "`howsimp, simpmeter`")
      return message.channel.send(embed)
    }

    //love
    if(args[0] === "love") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **Love**")
        .setColor(0xa890ee)
        .addField("**Name**", "`Love`")
        .addField("**Usage**", "`kat love`")
        .addField("**Description**", "`This command will show you how much you love someone`")
        .addField("**Aliases**", "`lovemeter, howloving`")
      return message.channel.send(embed)
    }
    //**Info**

    //serverinfo
    if(args[0] === "serverinfo") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **Server info**")
        .setColor("YELLOW")
        .addField("**Name**", "`Server info`")
        .addField("**Usage**", "`kat serverinfo`")
        .addField("**Description**", "`This command will show you katto server info`")
        .addField("**Aliases**", "`None`")
      return message.channel.send(embed)
    }
    
    //reset
    if(args[0] === "reset") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Help command for **Nekos reset**")
        .setColor("YELLOW")
        .addField("**Name**", "`Reset`")
        .addField("**Usage**", "`kat reset`")
        .addField("**Description**", "`This command will reset nekos for Katto members`")
        .addField("**Aliases**", "`nekosreset`")
        .addField("**Required permissions**", "`KICK_MEMBERS`")
      return message.channel.send(embed)
    }
  }

}
