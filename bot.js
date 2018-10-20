const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "b!";
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
        var prefix = "b!";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**:no_entry: , This Command Only For Servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Dont Have "ADMINISTRATOR" Permission To Send Broadcast Message**').then(m => m.delete(5000));
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Broadcast Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**You must write something to send the Broadcast Message**').then(m => m.delete(5000));
    message.channel.send(`**Are You Sure To Sent Broadcast? \n Broadcast Content :** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**:white_check_mark: , The Broadcast Has Been Send To __${message.guild.members.size}__ Members Successfully**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
 var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .addField(':pencil: , Sender :', message.author.username)
       .addField(':globe_with_meridians: , Server :', message.guild.name)
       .addField(':scroll: , Message :', args)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

const adminprefix = "b!";
const devs = ['195088897234042880'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith(adminprefix + 'rename')) {
client.user.setUsername(argresult).
    message.channel.sendMessage(`**:white_check_mark: , The Name Of The Bot Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else
  if (message.content.startsWith(adminprefix + 'setstatus')) {
client.user.setStatus(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Bot Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else
if (message.content.startsWith(adminprefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: , The Stream Bot Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client.login(process.env.BOT_TOKEN);
