const express = require('express');
const app = express();
const auth = require('./routes/auth');
const messages = require('./routes/message.routes');

app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/messages', messages);

module.exports = app;
