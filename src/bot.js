require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();









client.login(process.env.TOKEN).then(r =>
    console.log(r)
).catch(e => {
    console.log("Incorrect token...");
});




