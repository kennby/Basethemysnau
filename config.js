import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

// ❒═════════════════◊【 𝐍𝐎 𝐓𝐎𝐂𝐀𝐑 𝐍𝐀𝐃𝐀 𝐏𝐎𝐑 𝐀𝐐𝐔𝐈 】◊═════════════════❒
global.botnumber = ""
global.confirmCode = ""

// ❒═════════════════◊【 𝐎𝐖𝐍𝐄𝐑𝐀 】◊═════════════════❒
//No toques los nuneros que contienen el "true"
global.owner = [
 ['51907364682', 'kenn', true],
 ['', '', false],
 [''],
 [''],
 [''],
 [''],
 [''],
 ['']]
 
// ❒═════════════════◊【 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎𝐒 】◊═════════════════❒
//Agregate si tu numero es owner
global.contactos = [
["51907364682", 'kenn', 1]]

// ❒═════════════════◊【 𝐈𝐆𝐍𝐎𝐑𝐄𝐍 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 】◊═════════════════❒
global.suittag = [''];
global.prems = [''];

// ❒═════════════════◊【 𝐍𝐎𝐌𝐁𝐑𝐄𝐒 】◊═════════════════❒
global.packname = 'ONTX';
global.author = 'KENN';
global.wm = '';
global.sk = '';
global.titulowm = '';
global.titulowm2 = ``
global.igfg = '';
global.wait = '🕦';
global.vs = '1.5.5';
// ❒═════════════════◊【 𝐌𝐄𝐍𝐔𝐒 𝐃𝐄 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 】◊═════════════════❒
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/NaufraMD.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./Menu6.jpg')
global.imagen8 = fs.readFileSync('./Menu4.jpg')
// ❒═════════════════◊【 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 】◊═════════════════❒
//Enlaces aleatorios del bot
global.gp1 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.gp2 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.gp3 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.gp4 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.channel = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.paypal = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.yt = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.md = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.fb = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
// ❒═════════════════◊【 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒 】◊═════════════════❒
// ❒═════════════════◊【 𝐕𝐈𝐃𝐄𝐎𝐒 】◊═════════════════❒
// ❒═════════════════◊【 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒 】◊═════════════════❒
//MENSAJES RANDOM:
global.naufraMenus = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8]
global.naufraRedes = [gp1, gp2, gp3, gp4, channel, paypal, yt, md, fb]
// ❒═════════════════◊【 𝐇𝐎𝐑𝐀𝐑𝐈𝐎𝐒 】◊═════════════════❒
//Saludo User, Buen Dia
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🌎' + hour;

global.mods = [];

// ❒═════════════════◊【 𝐅𝐄𝐂𝐇𝐀 𝐘 𝐇𝐎𝐑𝐀 】◊═════════════════❒

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
// ❒═════════════════◊【 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎 】◊═════════════════❒
global.wm2 = ``;
global.gt = 'ONYX';
global.mysticbot = 'ONYX';
global.mysticbot = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v';
global.waitt = '🕦';
global.waittt = '🕦';
global.waitttt = '🕦';
global.nomorown = '51907364682';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*🏙️ Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*🌎 Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
// ❒═════════════════◊【 𝐍𝐎 𝐓𝐎𝐂𝐀𝐑 𝐍𝐀𝐃𝐀 𝐏𝐎𝐑 𝐀𝐐𝐔𝐈 】◊═════════════════❒

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
