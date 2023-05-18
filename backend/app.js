const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const dataSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  message: String,
});

const dataSchema1 = new mongoose.Schema({
  phone: String,
  date: String,
  time: String,
  weight: String,
  area: String,
  city: String,
  state: String,
  post_code: String,
});

mongoose.connect('mongodb://127.0.0.1:27017/ecotrader');

const Data = mongoose.model('Data', dataSchema);

router.post('/insert-data', async (req, res) => {
  const newData = new Data({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });
  try {
    await newData.save();
    console.log('saved successfully');
    res.status(200).send('Data inserted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to insert data');
  }
});

const Contact = mongoose.model('Contact', dataSchema1);

router.post('/insert-scrap', async (req, res) => {
  const newData = new Contact({
    phone:  req.body.phone,
    date:  req.body.date,
    time:  req.body.time,
    weight:  req.body.weight,
    area:  req.body.area,
    city:  req.body.city,
    state:  req.body.state,
    post_code:  req.body.post_code,
  });
  try {
    await newData.save();
    console.log('saved successfully');
    res.status(200).send('Data inserted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to insert data');
  }
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(router);

module.exports = app;
