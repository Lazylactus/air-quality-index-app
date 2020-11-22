const fs = require('fs');
const express = require('express');
const app = express();

require('dotenv').config();
const { App } = require('@slack/bolt');
const env = require('./.env');

app.use('/chef-bot-aj.herokuapp.com', (request, response) => {
  const challenge = request.body;

  response.send(challenge);
});

const bot = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.BOT_TOKEN,
});

(async () => {
  await bot.start(process.env.PORT || 3000);
  console.log('Starting Server');
  console.log('Bolt is running');
})();

// module.exports = app;
