const Tour = require('./../models/tourModel');

//check body middleware

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'missing name or price',
    });
  }
  next();
};

// get all the tours

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

// get single tour

exports.getSingleTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((i) => i.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   requestedAt: req.requestTime,
  //   data: {
  //     tour,
  //   },
  // });
};

// create new tour

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: {
    //   tour: newTour,
    // },
  });
};

// update tour

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated your here',
    },
  });
};

// delete tour

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
