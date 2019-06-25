const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/inventory');


const Inventory = conn.define('inventory', {
  item: {
    type:Sequelize.STRING,
    allowNull: false
  },
  status: Sequelize.ENUM('INSTOCK', 'BACKORDERED', 'DISCONTINUED'),
  update: Sequelize.DATE
});


const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const inventoryItem = ['Paper Towel', 'Grill', 'Sheet'];
  await Promise.all(inventoryItem.map(item => Inventory.create({ item })));
}


module.exports = {
  models: {
    Inventory
  },
  syncAndSeed
}
