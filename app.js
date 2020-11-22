require('dotenv').config();
const { App } = require('@slack/bolt');
const env = require('./.env');

const bot = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.BOT_TOKEN,
});

(async () => {
  await bot.start(process.env.PORT || 3000);
  console.log('Starting Server');
  console.log('Bolt is running');
})();
