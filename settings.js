//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Bram.4k
//Instagram: bram.4k
//Telegram: bram4k
//GitHub: @bram4k
//WhatsApp: +6282231669053
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@bram.4k

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: https://youtube.com/@bram.4k?si=_l-2bccE1EnIrZZb"
global.socialm = "GitHub: bram" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'kyy Bot MD V11' //ur bot name
global.ownernumber = '6282231669053' //ur owner number
global.ownername = 'brama' //ur owner name
global.websitex = "https://youtube.com/@bram.4k?si=_l-2bccE1EnIrZZb"
global.wagc = "https://chat.whatsapp.com/Bht7h9pTbQWDvLvybph9zG"
global.themeemoji = '🪀'
global.wm = "Bram Bot Inc."
global.botscript = 'https://github.com/bramm/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "bramm \n\n+6282231669053"
global.creator = "6282231669053@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6282231669053"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
