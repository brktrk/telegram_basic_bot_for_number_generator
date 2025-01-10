# Telegram Random Number Bot

This is a simple Telegram bot that sends a random number to a specified group chat every 4 seconds.

## Features
- Sends a random number between 0 and 99 to a Telegram group chat.
- The number is generated and sent every 4 seconds (configurable).
- Easily customizable for your own group and bot.

## Requirements
- Node.js (v14 or higher)
- `node-telegram-bot-api` library

## Setup Instructions
Follow these steps to get the bot up and running:

### 1. Create a Telegram Bot
- Open Telegram and search for the "BotFather" bot.
- Start a chat with BotFather and use the `/newbot` command to create your bot.
- Follow the instructions and get your **Bot Token** from BotFather.

### 2. Clone This Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/telegram-random-number-bot.git
cd telegram-random-number-bot
```

### 3. Install Dependencies
Install the necessary Node.js dependencies:
```bash
npm install
```

### 4. Configure the Bot
Open the index.js file in your project.
Replace 'KEY' with your actual bot token.
Set the group chat ID where you want the bot to send random numbers. You can get the group chat ID by inviting your bot to the group and then sending a test message. You can retrieve the chat ID programmatically using the bot's getUpdates API.

Example:
```js
const token = 'YOUR_BOT_TOKEN';
const groupChatId = 'YOUR_GROUP_CHAT_ID';
```

### 5. Run the Bot
Start the bot by running the following command:
```bash
node index.js
```

### 6. Customize the Bot
You can modify the bot’s behavior by changing the interval for sending messages, updating the range of the random number, or adding additional functionality. To modify the interval, adjust the value in the setInterval function inside index.js.

Example Customizations:
To change the range of random numbers:
```js
const randomNumber = Math.floor(Math.random() * 200);  // Now generates numbers between 0 and 199
```

To change the time interval between message sends (in milliseconds):
```js
setInterval(() => {
  // your code
}, 5000);  // Sends a random number every 5 seconds instead of 4
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Thanks to node-telegram-bot-api for the library used to interact with the Telegram API.

