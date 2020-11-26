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

// POST HANDLER

app.post('/mychef', function (request, response) {
  var data = request.body.text;
  data = data.toString();

  let output = handleMessage(data);
  console.log('return output ', output);
  response.send(output);
});

// RESPONSE TO DATA
function handleMessage(message) {
  console.log('handle ', message);
  let result;
  app.get(
    `http://api.waqi.info/feed/${message}/?token=82033d0b4fc868607cc0dc55567b8ecc4bac9822`,
    (request, response) => {
      result = response.body.data.api;
    }
  );
  return result;
}

// ERROR HANDLER
app.on('error', (err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
