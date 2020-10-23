const express = require('express');
const path = require('path');
const app = express();
const resourceRouter = require('./routes/resourceRouter');

require('dotenv').config();
const PORT = process.env.PORT || '3000';

const cors = require('cors');

// Parse request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Send main app
app.use(express.static(path.join(__dirname, '../../build/client/')));

// Set up routers
app.use('/resource', resourceRouter);

// Catch-all route handler
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  console.log('invoking global error handler');
  const defaultErr = {
    log: 'Express error handler caught unknown middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
