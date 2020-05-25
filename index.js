const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzE0NTEzMjI0NDQzMTAxMjg0.Xsv2Xg.j5YHPLvRw8CwWL4JyQ24FFW_P0w';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);