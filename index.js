const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('home');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
