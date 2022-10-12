const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

// get all users

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

// create new user

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);
  users.push(newUser);
  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(users),
    (error) => {
      res.status(201).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    }
  );
};

// get single user

exports.getSingleUser = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((i) => i.id === id);

  // if (id > users.length - 1) {
  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'User with this id not exist.',
    });
  }

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      user,
    },
  });
};

// update user

exports.updateUser = (req, res) => {
  if (req.params.id * 1 > users.length - 1) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'User with this id not exist.' });
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: 'Updated user here',
    },
  });
};

// delete user

exports.deleteUser = (req, res) => {
  if (req.params.id * 1 > users.length - 1) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'User with this id not exist.' });
  }

  res.status(204).json({
    status: 'success',
    user: null,
  });
};
