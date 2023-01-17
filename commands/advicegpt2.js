const { SlashCommandBuilder } = require("discord.js");
const { gpt2Token } = require("../config.json");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("advicegpt2")
    .setDescription("ask the great Kingchamp for advice")
    .addStringOption(option =>
		option.setName('input')
        .setRequired(true)
		.setDescription('Question you wish to ask King champ')),
  async execute(interaction) {
    const input = interaction.options.getString('input');
    query({"inputs": input}).then((response) => {
		console.log(response);
		console.log(response[0].generated_text);
        interaction.reply(response[0].generated_text);
    });
    
  },
};
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/gpt2",
		{
			headers: { Authorization: `Bearer ${gpt2Token}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

