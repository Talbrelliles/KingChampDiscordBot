<<<<<<< HEAD
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("undertale")
    .setDescription("Generates an undertale text image")
    .addStringOption((option) =>
      option.setName("text").setRequired(true).setDescription("Text generated")
    )
    .addStringOption((option) =>
      option
        .setName("character")
        .setRequired(false)
        .setDescription("Character used, Leave blank for none")
        .addChoices(
          { name: "Sans", value: "sans" },
          { name: "Papyrus", value: "papyrus" },
          { name: "Toriel", value: "toriel" },
          { name: "Frisk", value: "frisk" },
          { name: "Flowey", value: "flowey" },
          { name: "Training Dummy", value: "undertale-dummy" },
          { name: "Napstablook", value: "blook" },
          { name: "Grillby", value: "grillby" },
          { name: "Monster Kid", value: "undertale-monsterkid" },
          { name: "Mad Dummy", value: "undertale-maddummy" },
          { name: "Undyne", value: "undyne" },
          { name: "Undyne The Undying", value: "undyneundying" },
          { name: "Temmie", value: "temmie" },
          { name: "Alphys", value: "alphys" },
          { name: "Mettaton", value: "mtt" },
          { name: "Muffet", value: "muffet" },
          { name: "Mettaton EX", value: "mtt-ex" },
          { name: "Mettaton NEO", value: "undertale-mettaton-neo" },
          { name: "Asgore", value: "asgore" },
          { name: "Omega Flowey", value: "omegaflowey" },
          { name: "Asriel", value: "asriel" },
          {
            name: "Asriel (God of Hyper Death)",
            value: "undertale-hyperdeath-asriel",
          },
          { name: "Asriel (Final form)", value: "undertale-final-form-asriel" },
          { name: "Chara", value: "chara" },
          { name: "WD Gaster", value: "gaster" }
        )
    ),
  async execute(interaction) {
    const txt = interaction.options.getString("text");
    const chr = interaction.options.getString("character");
    let result = txt.replaceAll(" ", "%20");
    return interaction.reply(
      `https://www.demirramon.com/gen/undertale_text_box.gif?message=${result}&character=${chr}&animate=true`
    );
  },
};
=======
/*const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("undertale")
		.setDescription("Generates an undertale text image")
		.addStringOption((option) =>
			option
				.setName("Text")
				.setDescription("Generated text")
				.setRequired(true)
		),
	async execute(interaction) {
		const txt = interaction.options.addString("Text");
		return interaction.reply("https://www.demirramon.com/gen/undertale_text_box.png?message="+txt+"&character=sans");
	},
};*/
>>>>>>> cb6a40b4367fd3eb6caa160d84d3900c820a8258
