const express = require('express');
const cors = require('cors');

const routes = require('./routes/index');
const AppError = require('../../errors/AppError');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Middleware to handle errors
app.use((err, request, response, nextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
