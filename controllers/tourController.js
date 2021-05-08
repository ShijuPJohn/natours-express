const Tour = require('./../models/tourModel');


// exports.checkBody = (req, res, next) => {
//   const reqBody = req.body;
//   if ((!reqBody.name) || (!reqBody.price)) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   next();
// };
exports.getAllTours = (async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours: tours
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'error',
      message: 'some error occurred while trying to access db'
    });
  }
});

exports.getTour = (async (req, res) => {
  try {
    const tours = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tours: tours
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'error',
      message: 'some error occurred while trying to access db'
    });
  }

});

exports.createTour = (async (req, res) => {
  console.log('inside createTour()');
  try {
    const reqBody = req.body;
    const newTour = await Tour.create(reqBody);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'error'
    });
  }
});

exports.deleteTour = ((req, res) => {
  // let tour = tours.find(tour => tour.id === parseInt(req.params.id));

  res.status(204).json({
    status: 'success',
    data: {
      tour: null
    }
  });

});

exports.updateTour = ((req, res) => {
  try {

  } catch (e) {

  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<updated tour here>'
    }
  });

});