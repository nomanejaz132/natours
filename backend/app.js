const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is started running successfully' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
