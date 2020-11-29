const { response, json } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');
const fetch = require('node-fetch');

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello Stranger!');
});

// POST HANDLER

app.post('/mychef', async function (request, response) {
  var data = request.body.text;
  data = data.toString();

  try {
    output = await handleMessage(data);
    let qualityStatus = 'Good! (Breathe Free)';
    if (output > 100) {
      qualityStatus = 'Bad (Wear Mask)';
    }
    response.send(
      `City: ${data} -- AQI: ${output} -- Status: ${qualityStatus}`
    );
  } catch (e) {
    response.send(`Sorry unable to find any data for ${data}`);
  }
});

// RESPONSE TO DATA
async function handleMessage(message) {
  console.log('handle ', message);

  host = 'https://api.waqi.info';
  path = `/feed/${message}/?token=82033d0b4fc868607cc0dc55567b8ecc4bac9822`;

  try {
    const res = await fetch(host + path);
    const json = await res.json();
    console.log('res ', json);
    return json['data']['aqi'];
  } catch (e) {
    console.log('error ', e);
  }
}

// ERROR HANDLER
app.on('error', (err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
