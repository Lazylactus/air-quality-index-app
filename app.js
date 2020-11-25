const { response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello Stranger!');
});

// ROUTE HANDLER

app.post('/mychef', function (request, response) {
  const data = request.body.text;
  if (data === 'hello' || data === 'Hello' || 'intro') {
    response.send(
      'Hello stranger, I am an AQI(Air quality index) collector. I collect AQIs of places around the global and you can call me anytime to know about em'
    );
  } else if (data === 'city') {
    response.send('Type the city name');
    app.on('message', (data) => {
      if (data.type !== 'message') return;

      handleMessage(data.text);
    });
  }
});

// RESPONSE TO DATA
function handleMessage(message) {
  message = message.split(' ');
  app.get(
    `http://api.waqi.info/feed/${message}/?token=82033d0b4fc868607cc0dc55567b8ecc4bac9822`,
    () => {
      response.send(data.api);
    }
  );
}

// ERROR HANDLER
app.on('error', (err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
