require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log(`Mongoose connected on port ${PORT} veikia zjbs`);
  })
  .catch((err) => {
    console.log('Connection error');
  });

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json('Server is running');
});

const apiRoutes = require('./api/apiRoutes');

app.use('/', apiRoutes);

app.listen(PORT, console.log(`Backendas online on port ${PORT}`));
