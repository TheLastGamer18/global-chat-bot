const fs = require("fs");

module.exports = async(client) => {
  
  fs.readdir("./events/", async(err, files) => {
    
    if(err) {
      return console.log(err)
    };

    for(let file of files) {
      let event = require(`../events/${file}`);
      client.on(file.split(".")[0], event.bind(null, client));
    }
    
  });

  console.log("All events loaded successfully!")
  
};
