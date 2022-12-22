const express = require('express');
const app = express();
const path = require('path');
const partsModel = require('./models/partModel.js');

const PORT = 3000;

const routes = require('./routes/routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/lol', (req, res) => {
//   return res.status(200).send('Lmao');
// });

app.use('/', routes);

app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  // console.log('before error: ', err);
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  //not sure if json is in the right place
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
