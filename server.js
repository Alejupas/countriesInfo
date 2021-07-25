require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//prisijungiam prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Conneced successfully to Mongooose database');
  })
  .catch((err) => console.error(err.message));

// routes
const placesRoutes = require('./server/routes/PlacesRoutes');
// use route
app.use('/', placesRoutes);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
