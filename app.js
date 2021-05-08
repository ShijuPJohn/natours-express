const express = require('express');
const app = express();
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');
const root_url = '/api/v1';

app.use(express.json());
if (process.env.NODE_ENV==='development'){
  app.use(morgan('dev'));
}


app.use(`${root_url}/tours`, tourRoutes);
app.use(`${root_url}/users`, userRoutes);


module.exports = app;

// app.get(`${commons.root_url}/tours`, getAllTours);
// app.get(`${commons.root_url}/tours/:id`, getTour);
// app.patch(`${commons.root_url}/tours/:id`, updateTour);
// app.delete(`${commons.root_url}/tours/:id`, deleteTour);
// app.post(`${commons.root_url}/tours`, createTour);
