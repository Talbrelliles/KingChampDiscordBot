const { SlashCommandBuilder } = require("discord.js");
const { chatToken } = require("../config.json");
const smartestchatbot = require('smartestchatbot');

const chatClient = new smartestchatbot.Client(chatToken);





module.exports = {
  data: new SlashCommandBuilder()
    .setName("advice")
    .setDescription("ask the great Kingchamp for advice")
    .addStringOption(option =>
		option.setName('input')
        .setRequired(true)
		.setDescription('Question you wish to ask King champ')),
  async execute(interaction) {
    const input = interaction.options.getString('input');
    chatClient.chat({message:input, name:"SmartestChatbot", owner:"Taimase", user: interaction.user.id}, "English").then(reply => {

            interaction.reply(`Fellow king ${interaction.user} asked the following question: \n\`${input}.\`\n\nMy fellow king the answer is simple: \n${reply}`);
 
        });
    
  },
};
