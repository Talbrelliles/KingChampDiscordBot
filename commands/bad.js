const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bad")
    .setDescription("farm someone")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Person to Funny")
        .setRequired(true)
    ),
  async execute(interaction) {
    const targetMember = interaction.options.getMember("target");
    const invite = await interaction.channel.createInvite(
      {
        maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
        maxUses: 1, // maximum times it can be used
      },
      `Created by KingChamp's love for ${targetMember}`
    );
    await interaction.reply(
      `Kicking ${targetMember} from the server, sorry king.`
    );
    await targetMember.send(
      `I forgive you this time King, but know that my trust will not be gained back so easily. ${invite}`
    );
    await targetMember.kick();
  },
};
