const express = require('express');
const {
  getAllTours,
  createTour,
  getSingleTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('./../controllers/tourController');

const tourRouter = express.Router();

tourRouter.param('id', checkID);

tourRouter.route('/').get(getAllTours).post(checkBody, createTour);
tourRouter
  .route('/:id')
  .get(getSingleTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = tourRouter;
