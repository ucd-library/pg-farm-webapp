const express = require('express');
const app = express();
const config = require('./lib/config');

require('./controllers/static')(app);

app.listen(config.server.port, () => {
  console.log('PG Farm webapp running on port: '+config.server.port);
});