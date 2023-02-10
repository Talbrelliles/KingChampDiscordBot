const { Events } = require("discord.js");
const whitelistedChannelIds = ["621499352300519455", "739667011226959942", "1073065227815501957"];

const { youToken } = require("../config.json");
const { request } = require("undici");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    console.log(message.channelId);
    if (!message.author.bot) {
      if (whitelistedChannelIds.includes(message.channelId)) {
        if (message.content.substr(0,1) == "|") {
          console.log("READY");
          input = message.content.substr(1, message.content.length);
          const url =
            `https://api.betterapi.net/youdotcom/chat?message=${input}&key=` +
            youToken;
          try {
            const youResult = await request(url);
            const youReturn = await youResult.body.json();
            message.channel.send(
              `Good prompt king, the collective mass of the universe responds with:\n\n\`${youReturn.message}\``
            );
          } catch (e) {
            console.log(e);
            message.channel.send(
              "I am sorry king. The universe currently is closed"
            );
          }
        }
      }
    }
  },
};
