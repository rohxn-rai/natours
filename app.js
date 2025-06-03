const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello form the server side!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
