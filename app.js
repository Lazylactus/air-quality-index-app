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
  response.send('Hello World');
});

app.post('/mychef', function (request, response) {
  const data = request.body.text;
  if (data === 'hello' || data === 'Hello') {
    response.send('Hello my friend');
  } else if (data === 'breakfast') {
    response.send('Would like to have some cereals');
  } else {
    response.send('Hohoho how can I help mate?');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
