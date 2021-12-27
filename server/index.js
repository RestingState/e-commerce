const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:12345@e-commerce.6isgj.mongodb.net/e-commerce',
      {
        useNewUrlParser: true,
      }
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
