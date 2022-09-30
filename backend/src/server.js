// @packages
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
// @scripts
const survey = require('./routes/survey');
// @env vars
dotenv.config({ path: './config/config.env' });

const app = express();

mongoose.connect(`${process.env.DATABASE_ACCESS}`, () =>
  console.log('Database Connected...')
);

// middleware: body parser
app.use(express.json());
// middleware: cors
app.use(cors());

// mount routers
app.use('/api/v1/survey', survey);

app.get('/', (_req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Hello from Research Survey API' });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
