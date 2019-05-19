const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const postsRoute = require('./routes/post');
const userRoute = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log('Mongodb Connected');
  })
  .catch(error => {
    console.log(error);
  });

const port = process.env.PORT || 5000;

app.use('/api/posts', postsRoute);
app.use('/api/users', userRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
