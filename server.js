const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const article = require('./model.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Handles any requests that don't match the ones above
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/api/articles', (req, res) => {
  article
    .create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get('/api/articles', (req, res) => {
  article
    .find({ Saved: 'true' })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post('/api/savedarticles', (req, res) => {
  article
    .updateOne({ Title: req.body.Title }, { $set: { Saved: 'true' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post('/api/postnotes', (req, res) => {
  article
    .updateOne({ Title: req.body.Title }, { $set: { Notes: req.body.Notes } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
