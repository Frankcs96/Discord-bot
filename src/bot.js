require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Logged in as " + client.user.tag)
});

client.on('message', msg => {
   if (msg.content === 'ping') {
       msg.channel.send('pong');
   }

});







client.login(process.env.TOKEN).then(r =>
    console.log("Token correct")
).catch(e => {
    console.log("Incorrect token...");
});




