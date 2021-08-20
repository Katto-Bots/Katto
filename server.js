const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

const { Client, Collection } = require("discord.js");
require('discord-reply');
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
})

client.on("debug", function(info){
    console.log(`debug -> ${info}`);
});

config({
    path: __dirname + "/.env"
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

const activities_list = [
    "tomus not lazy",
    "CALL ME MAMA",
    "im active",
    "laziness",
    "best bot no cap?!",
    "idk sum random shit im out of ideas"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setPresence({
            status : "idle",
            activity : {
                name : activities_list[index],
                type : "COMPETING",
            }
        }); 
    }, 5000); 
    console.log(`Name: ${client.user.username}\nTag: ${client.user.tag}\nID: ${client.user.id}`);
})

client.on("message", async message => {
    const prefix = "kat "; // Prefix

    if (message.author.bot) return;
    if (!message.guild) return; // Zakaz pisania do DM
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.on("message", async message => {
    let member = message.author
    if(message.author.bot) return;
    if(message.content === "i love katto") return message.channel.send("<@"+member.id+">"+", I love you too owo")
})

client.on("message", async message => {
    let member = message.author
    if(message.author.bot) return;
    if(message.content === "i hate katto") return message.channel.send("<@"+member.id+">"+", idk what to type here")
})

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content === "beea") return message.channel.send("<:yBite:818948153579536464>")
})
client.login(process.env.TOKEN);
