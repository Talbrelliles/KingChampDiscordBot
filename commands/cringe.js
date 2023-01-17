const { SlashCommandBuilder } = require("discord.js");
const cringeCounter = require('../files/cringeCounter.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("cringe")
    .setDescription("Determines how cringe a message is."),
  async execute(interaction) {
    interaction.channel.messages.fetch({ limit: 1 }).then(messages => {
        let lastMessage = messages.last();
        interaction.reply(detectCringe(lastMessage));
    });

  },
};

function detectCringe(message){
    if(message.author.bot){
        return("Your ignorance, your stupidity, which causes you to assume a level of cringyness about my words, shows your lack of respect for me. Such disrespect is a betrayal of me. I, the true King, should be addressed with the dignity and respect of a King, and my words should be cherished as wisdom. You have demeaned me, by assuming I am capable of being cringe, when I have ascended above such things. In the future king, if you want to see cringe I suggest turning your webcam on.");
    }else{
        let messageCringe = 0;
        for(const user in cringeCounter.users){
            if (message.author.username == cringeCounter.users[user].name){
                messageCringe += cringeCounter.users[user].multiplier;
            }
        }
        for(const word in cringeCounter.banList){
            if(message.content.toLowerCase().includes(cringeCounter.banList[word].name)){
                messageCringe += cringeCounter.banList[word].power;
            }
        }
        console.log(messageCringe);
        if(message.attachments.size > 0){
            message.react('🇨');
            message.react('🇷');
            message.react('🇮');
            message.react('🇳');
            message.react('🇬');
            message.react('🇪');
            return(`${message.author.username}'s image caused my muscles to retract. This is due to my reaction of disgust at it, in other words: wow that's cringe. Sorry King.`);
        }
        if (messageCringe >= 12) {
            message.channel.bulkDelete(1);
            return(`Hold it right there King ${message.author.username}, This message is so unbelievably cringe I think I need to brush my teeth. I will delete the message to save you from further embarrassment.`);
        }
        if( messageCringe >= 8) {
            return('Yo king that\'s messed \nhttps://cdn.discordapp.com/attachments/621499352300519455/1059347952176480257/image.png \n For your own benefit don\'t post cringe like that again.');
        }
        if (messageCringe >= 5) {
            message.react('🇨');
            message.react('🇷');
            message.react('🇮');
            message.react('🇳');
            message.react('🇬');
            message.react('🇪');
            message.react('723059060940865557');
            return(`Sorry King ${message.author.username}, your message is marked as cringe. I expect better of you in future messages King.`);
        }
        if (messageCringe >= 3) {
            message.react('723059060940865557');
            return(`Yo King, ngl that was kinda cringe.`);
        }
        
    }

}