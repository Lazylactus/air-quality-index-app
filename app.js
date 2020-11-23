const express = require('express');
const app = express();
const 

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/mychef', function (req, res) {
  res.json({ requestBody: req.body });
});
