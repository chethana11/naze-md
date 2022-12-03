/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['94711581814']
global.ownernomer = "94711581814"
global.premium = ['94711581814']
global.packname = 'Sticker By'
global.author = 'Cj Dev'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Become Admin First!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Special Features of Owner Bot',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Special Features for Bot Number Users',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/nazedev'
global.myyt = 'https://chat.whatsapp.com/FQqnthj21zt2Eiiv7rQKxC'
global.myytv = '94711581814'
global.mygc = "https://chat.whatsapp.com/FQqnthj21zt2Eiiv7rQKxC"

// Engak Ngaruh, Belum Kepasang
global.botname = 'C BOT'
global.akulaku = 'Bot By Hydra dark alpha'
global.ytname = 'Coming zoon' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
