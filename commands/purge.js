const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Deletes amount of specified messages")
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("How many messages you want to delete")
        .setRequired(true)
    ),
  async execute(interaction) {
    const amount = interaction.options.getInteger("amount");

    if (amount < 1 || amount > 99) {
      return interaction.reply({
        content: "You need to input a number between 1 and 99.",
        ephemeral: true,
      });
    }
    await interaction.channel.bulkDelete(amount, true).catch((error) => {
      console.error(error);
      interaction.reply("There was an error deleting messages");
    });
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild

    await interaction.reply(`Sucessfully pruned ${amount} messages.`);
  },
};
