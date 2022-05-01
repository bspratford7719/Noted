const express = require('express');
const app = express();
// const {  } = require('./data/');






app.get('/api/', (req, res) => {
  res.json('Hello!');
});
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});