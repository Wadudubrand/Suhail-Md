const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255711699161";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_29_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDcxLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9TWFdFc25aR0hKbHVtYTRYYWN0SWtORWh6TG02eHJXUFltRTZvZjB5R2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzExNjk5MTYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENjM0MjYzQUE3RDU3MDUyRUFBNjc2NTRBOTU0OUU1OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MzE3NTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3MTE2OTkxNjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgxMjFFRTE2MjQyNDBEQjVFMDAxQUI5NzlGMkQxQ0MyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDUzMTc2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEYVE0UkJDWVNHcXJxcHFPa1ktY2dnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVkMzc0N2E0LWU1YzItNDBlYy04NzI4LTNjZDJjYzMwMjIwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyMzEsXG4gICAgICA5MixcbiAgICAgIDE4OSxcbiAgICAgIDk1LFxuICAgICAgNTQsXG4gICAgICAxMDgsXG4gICAgICA2MCxcbiAgICAgIDE3NyxcbiAgICAgIDY2LFxuICAgICAgMjIxLFxuICAgICAgMjA1LFxuICAgICAgMjQsXG4gICAgICAxMDUsXG4gICAgICAxOTEsXG4gICAgICAyMzMsXG4gICAgICA4OSxcbiAgICAgIDEwMSxcbiAgICAgIDEyMyxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgNDYsXG4gICAgICAxNjIsXG4gICAgICAwLFxuICAgICAgMTcsXG4gICAgICAxOTYsXG4gICAgICAxMjYsXG4gICAgICAzMyxcbiAgICAgIDgyLFxuICAgICAgMTYwLFxuICAgICAgMzIsXG4gICAgICAxMDQsXG4gICAgICAxLFxuICAgICAgMTM4LFxuICAgICAgMTcwLFxuICAgICAgMjEzLFxuICAgICAgMTc1LFxuICAgICAgMSxcbiAgICAgIDEwNyxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNDWUNYN1ZOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MTE2OTkxNjE6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXYXJjaXNsYXdcIixcbiAgICBcImxpZFwiOiBcIjIyNTA3Mzc2ODIzMTA1NDoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZXo2c3NHRUtmMnRMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIit4cWNPMWdzdi9GYUNxdURGMDFMeEtISU02YjZiMWdQUWN1TnVmRG12V1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVlN6WTB1YWV0UkxwSmcwL3JzeFpmUXMrLzdsMHJ3a1dPOW9heS9mYU83dHJ1dVRPZ1MvWTl3MEZLQ0RiVUpHSkNrK3ltNzgrYVRoVzJPaU9WeHN5QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWdlVGVySjhmSEF6T3YwMkdxcFZ5am9NNG8vRGVvSEl3Z0ZCSmRxWHRLL3NTNGQva2piQmc2Vk4wbW1jM0NBSG55ZHNOeS84b3ZuOEFXc3RCMGNZaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzExNjk5MTYxOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MzE3NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLS1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtLVS5qc29uIjogIntcImtleURhdGFcIjpcIlgvSmUrVjdKUnczYk9ha0xpTm9nb1RPVnBnUHo5SzBDcVREazJENGxSd1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2OTY0MjQ1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTMxNzU3MjA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
