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
  var data = request.body.text;
  data = data.toString();

  console.log(data);
  var output = handleMessage(data);
  response.send(output);
});

// RESPONSE TO DATA
function handleMessage(message) {
  app.get(
    `/api.waqi.info/feed/${message}/?token=82033d0b4fc868607cc0dc55567b8ecc4bac9822`,
    (request, response) => {
      var result = response.data.api;
    }
  );
  return result;
}

// ERROR HANDLER
app.on('error', (err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
