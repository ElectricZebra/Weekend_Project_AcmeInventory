const express = require('express');
const app = express();
const { syncAndSeed, models } = require('./db');
const { Inventory } = models;
const { main } = require('./main');
const path = require('path')

syncAndSeed();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/api/products', async (req, res, next) => {
  try {
    res.send(await Inventory.findAll());
  }
  catch (ex) {
    next(ex)
  }
})
app.put('/api/products/:id')
