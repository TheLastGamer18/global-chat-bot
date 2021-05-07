const { prefix } = require(".././config/config.json");
const discord = require("discord.js");

module.exports = async(client, message) => {
  
  if(message.author.bot || !message.guild) {
    return
  };
  
  if(message.channel.name === "global-chat") {
    client.guilds.cache.forEach(guild => {
      
      if(guild === message.guild) {
        return
      };
      
      let channel = guild.channels.cache.find(ch => ch.name === "global-chat")
      if(!channel) {
        return
      };
      
      let embed = new discord.MessageEmbed()
     .setAuthor(message.author.tag +" | Global Chat", message.author.displayAvatarURL({ dynamic: true }))
     .setColor("RANDOM")
     .setDescription(message.content)
     .setFooter("Server: "+message.guild.name, message.guild.iconURL({ dynamic: true }))
     .setTimestamp()
     channel.send(embed)
      
    })
  }
  
};
