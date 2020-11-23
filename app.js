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

app.post('/mychef', function (req, res) {
  res.json({ requestBody: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
