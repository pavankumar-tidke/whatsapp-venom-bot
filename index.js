// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');


const chromiumArgs = [
    '--disable-web-security', '--no-sandbox', '--disable-web-security',
    '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache',
    '--disable-offline-load-stale-cache', '--disk-cache-size=0',
    '--disable-background-networking', '--disable-default-apps', '--disable-extensions',
    '--disable-sync', '--disable-translate', '--hide-scrollbars', '--metrics-recording-only',
    '--mute-audio', '--no-first-run', '--safebrowsing-disable-auto-update',
    '--ignore-certificate-errors', '--ignore-ssl-errors', '--ignore-certificate-errors-spki-list'
  ];

  

venom
  .create(
      {
        browserArgs: chromiumArgs,
      })
  .then((client) => {
      start(client)})
  .catch((erro) => {
    console.log(erro);
  });



function start(client) {
  client.onMessage((message) => {
    if (message.body != '' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Hi, I am Pavan\'s bot, Wait for reply... ')
        .then((result) => {
        //   console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}
