const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;
app.listen(port, () => {  console.log('We are live on ' + port);});
//const express        = require('express');
//const MongoClient    = require('mongodb').MongoClient;
//const bodyParser     = require('body-parser');
const db             = require('./db');
app.use(bodyParser.urlencoded({ extended: true }));
//MongoClient.connect(db.url, (err, database) => {  if (err) return console.log(err)  require('./app/routes')(app, database);

MongoClient.connect(db.url, (err, database) => {  if (err) return console.log(err)                        // Make sure you add the database name and not the collection name  const database = database.db("note-api")  require('./app/routes')(app, database);


app.listen(port, () => {    console.log('We are live on ' + port);  });               })
