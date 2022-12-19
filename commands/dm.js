const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dm")
    .setDescription("King Champ pulls up in target's dms")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Person to Funny")
        .setRequired(true)
    ),
  async execute(interaction) {
    // await client.users.send(interaction.options.getUser("target").id, "TEST")
    // await interaction.reply(`you are attempting to dm ${interaction.options.getUser('target')} who has the id ${interaction.options.getUser("target").id}`);

    await interaction.reply({
      content: `Sending ${interaction.options.getUser(
        "target"
      )} a funny message.`,
      ephemeral: true,
    });
    await interaction.options
      .getUser("target")
      .send(
        "My fellow king-in-training, I couldn't help but notice you weren't at the gym last week. My fellow champs and I just wanted to let you know that through hard work and self respect you will be well on your way to become a king such as myself."
      );
  },
};
