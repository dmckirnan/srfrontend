const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

const PORT = 4000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, + 'public/index.html'));
})

app.listen(PORT, () => {
  console.log('Listening on Port 4000');
});
