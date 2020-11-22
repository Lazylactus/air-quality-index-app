//import * as functions from 'firebase-functions';
const functions = require('firebase-functions');
const https = require('https');

export const myBot = functions.https.onrequest((request, response) => {
  const { challenge } = request.body;

  response.send({ challenge });
});
