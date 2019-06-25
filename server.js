const express = require('express');
const app = express();
const { syncAndSeed, models } = require('./db');
const { Inventory } = models;
const path = require('path')

syncAndSeed();

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listening on port ${port}`))

app.get('/', async(req, res, next) => {
  try {
    await res.sendFile(path.join(__dirname+"/index.html"))
  }
  catch (ex) {
    next(ex)
  }
});

app.get('/api/products', async (req, res, next) => {
  try {
    console.log('////////// inside app.get')
    res.send(await Inventory.findAll());
  }
  catch (ex) {
    next(ex)
  }
})

app.put('/api/products/:id')
