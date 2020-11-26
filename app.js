const { response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');

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

  var options = {
    host: 'api.waqi.info',
    path: `/feed/${message}/?token=82033d0b4fc868607cc0dc55567b8ecc4bac9822`,
  };

  callback = function (response) {
    var str = '';

    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      console.log('response: ', response.body);
    });
  };

  http.request(options, callback).end();
}

// ERROR HANDLER
app.on('error', (err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
