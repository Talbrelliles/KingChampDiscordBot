const { Events, ActivityType } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    //ADD NEW ACTIVITIES HERE
    const options = [
      {
        type: ActivityType.Watching,
        text: "SpyXFamily",
        status: "online",
      },
      {
        type: ActivityType.Listening,
        text: "Kings",
        status: "online",
      },
      {
        type: ActivityType.Playing,
        text: "Minecraft",
        status: "online",
      },
      {
        type: ActivityType.Watching,
        text: "You Sleep",
        status: "online",
      },
      {
        type: ActivityType.Competing,
        text: "Weightlifting",
        status: "online",
      },
    ];

    // THIS IS THE FORMAT TO SET ACTIVITY
    // await client.user.setPresence({
    //   activities: [
    //     {
    //       name: "Roblox",
    //       type: ActivityType.Playing,
    //     },
    //   ],
    //   status: "online",
    // });

    //This code switches between the options every 10 seconds.
    setInterval(() => pickPresence(client, options), 10 * 1000);
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};

function pickPresence(client, options) {
  const option = Math.floor(Math.random() * options.length);
  client.user.setPresence({
    activities: [
      {
        name: options[option].text,
        type: options[option].type,
      },
    ],
    status: options[option].status,
  });
}
