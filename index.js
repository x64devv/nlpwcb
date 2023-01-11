const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const botmodel = require('./botmodel');
botmodel().then(nlp => {

//Instantiating a whatsapp client with authStrategy sot that you don't have to scan 
// the QR Code everytime.
const client = new Client({
    authStrategy: new LocalAuth()
});

//Generating a QR Code if no session is available
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');    
});

    client.on('message', (message) => {
        message.getChat().then((chat) => {
            nlp.process(message.body).then((result) => {
                console.log(result.answer);
                client.sendMessage(chat.id._serialized, result.answer);
            });
        });
        
    }
);

client.initialize();

});
