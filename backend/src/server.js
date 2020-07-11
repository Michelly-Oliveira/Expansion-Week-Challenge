// import express from 'express';
// import cors from 'cors';

const express = require('express');
const cors = require('cors');

const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
