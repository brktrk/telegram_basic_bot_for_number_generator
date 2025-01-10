const TelegramBot = require('node-telegram-bot-api');

// Bot token'ınızı buraya ekleyin (BotFather'dan aldığınız token)
const token = 'KEY';  // <-- Buraya kendi token'ınızı ekleyin

// Botu başlatıyoruz (polling yöntemiyle yeni mesajlar almak için)
const bot = new TelegramBot(token, { polling: true });

// Grubun chat ID'sini burada belirtin
const groupChatId = -4791309691; // Buraya kendi grup chat ID'nizi ekleyin

// Rastgele sayıyı 10 saniyede bir gönderme işlemi
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100);  // 0-99 arasında rastgele bir sayı
  bot.sendMessage(groupChatId, `Random Number: ${randomNumber}`);
  console.log("ok")
}, 4000);  // 10000 ms = 10 saniye

