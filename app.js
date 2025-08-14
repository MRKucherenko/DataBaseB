const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/authRoutes');
const dataBaseRoutes = require('./routes/dataBaseRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/auth', authRouter);
app.use('/api/dataBase', dataBaseRoutes);

app.use((req, ress) => {
  ress.status(404).json({
    message: 'Not Found'
  })
});

app.use((err, req, ress, next) => {
  const {status = 500 ,message = 'Server Error'} = err;

  ress.status(status).json({
    message
  })
});

module.exports = app;
