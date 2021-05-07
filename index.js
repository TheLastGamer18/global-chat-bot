const discord = require("discord.js");
const client = new discord.Client({ ws: { intents: discord.Intents.GUILD_MEMBERS } });
const { token } = require("./config/config.json");
require("./handlers/loader.js")(client);

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.login(token);
