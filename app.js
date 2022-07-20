const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('잘가 세상아!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
