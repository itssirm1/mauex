const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923195832822"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "17863688449@s.whatsapp.net"
global.scan="https://replit.com/@SuhailTechInfo/Secktor-Bot?v=1";
global.gurl= process.env.GURL   || "https://wa.me/923195832822ʜᴇʟʟᴏ+𝐈𝐭𝐬_𝐒𝐢𝐫𝐦™𝕏";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.website =process.env.GURL|| "https://github.com/kimsirm/Sirm-Md" ; 
global.github=process.env.GITHUB|| "https://github.com/kimsirm/Sirm-Md";
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://i.imgur.com/AqFUKAm.jpeg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,923195832822";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923195832822";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Sirm-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.6",
  caption:process.env.CAPTION || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐒𝐈𝐑𝐌²²¹-𝐌𝐃™*\n*ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ* • 𝟭𝟰/𝟭𝟮/𝟮𝟬𝟮𝟯" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『Follow • 𝐈𝐭𝐬_𝐒𝐢𝐫𝐦™𝕏』*\n https://wa.me/923195832822ʜᴇʟʟᴏ+𝐈𝐭𝐬_𝐒𝐢𝐫𝐦™𝕏"),

 
  author: process.env.PACK_AUTHER || "Sirm-MD",
  packname: process.env.PACK_NAME || "Sirm ",
  botname: process.env.BOT_NAME   || "𝐒𝐈𝐑𝐌-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "𝐈𝐭𝐬_𝐒𝐢𝐫𝐦™𝕏",


  sessionName:process.env.SESSION_ID|| "",
  userImages:process.env.USER_IMAGES|| "",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || "3",
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
