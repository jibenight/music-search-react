const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (request, response) => {
  response.render(index.html);
});

app.listen(port, () => {
  console.log(` App listening at http://localhost:${port}`);
});
