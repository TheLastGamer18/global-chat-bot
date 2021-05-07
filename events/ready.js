module.exports = async(client) => {
  
  console.log(`Ready! Logged in as ${client.user.tag}!`)
  client.user.setActivity("people chat!", { type: "WATCHING" })
  
};
