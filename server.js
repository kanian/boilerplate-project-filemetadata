'use strict';

const express = require('express');
const cors = require('cors');
const upload = require('./getMulter')

const app = express();


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  const {originalname, size, mimetype} = file
    res.send({name: originalname, size, type: mimetype})
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
