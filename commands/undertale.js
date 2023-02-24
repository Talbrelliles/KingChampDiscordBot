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