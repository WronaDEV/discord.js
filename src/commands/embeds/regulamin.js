const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'regulamin',
    description: 'regulamin',
    args: true,
    usage: 'regulamin',

    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('REGULAMIN SERWERA DISCORD')
        .setDescription('1. Zakaz spamu i flodu.\n2. Zakaz pingowania użytkowników bez uzasadnionego celu.\n3. Zakaz wysyłania reklam serwisów nie związanych z FlyMC.pl.\n4. Korzystając z czatu należy zachować czystość wypowiedzi.\n5. Zakaz wysyłania nieodpowiednich treści w wiadomości prywatnej.\n6. Zakaz tworzenia ticketów bez powodu.\n7. Należy używać kanałów zgodnie z ich przeznaczeniem.\n8. Zakaz podszywania się pod jakiegokolwiek członka serwera.\n9. Zakaz rozpowszechniania czyiś danych osobowych bez jej zgody.\n\n **Jeśli zobaczyłeś że ktoś złamał regulamin zgłoś to niezwłocznie do administracji na <#967138035063984188>!**')
        .setImage('https://raw.githubusercontent.com/FlyMC-pl/website/main/assets/prosze-czytac-regulamin.png')
        message.channel.send({ embeds: [embed] });
    }
}