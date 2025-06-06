const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello form the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

const port = 4000;
app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
