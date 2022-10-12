const express = require('express');
const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('./../controllers/userController');

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter
  .route('/:id')
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
