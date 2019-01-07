const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

//bodyparser middleware

app.use(bodyParser.json());

//db Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(()=>console.log("MOngoDb is connected.."))
  .catch(err=>console.log(err));

  //use routes
  app.use('/api/items', items);


  const port = process.env.PORT|| 5000;
  app.listen(port, () => console.log(`Server started on port ${port}`));