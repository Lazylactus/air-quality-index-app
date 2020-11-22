// //import * as functions from 'firebase-functions';
// const functions = require('firebase-functions');
// const https = require('https');

// export const myBot = functions.https.onrequest((request, response) => {
//   const { challenge } = request.body;

//   response.send({ challenge });
// });

const fs = require('fs');
const https = require('https');
const url = require('url');
const app = require('./app');

const server = https.createServer((request, respone) => {
  const challenge = request.body;

  respone.send(challenge);
});
