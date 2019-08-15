const express = require('express');
const app = express();
const port = 3000;

app.use(require('morgan')('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));


app.listen(port, () => {
  console.log('Listening on port: ' + port);
});