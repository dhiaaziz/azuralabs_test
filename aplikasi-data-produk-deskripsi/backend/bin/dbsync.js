require('dotenv').config()
const db = require('../models');
const Product = db.product;

db.sequelize.sync({ force: true })
    .then(() => {
        console.log('Drop and Resync Database with { force: true }');
        init();
    })
    .then(() => {
        // db.sequelize.close();

    });


async function init() {
    await Product.create({
        name: 'Macbook Pro 2017',
        description: 'Macbook Pro keluaran 2017, spek ssd 256GB, prosesor Intel Core i7, RAM 8GB, vga GeForce GTX 1050ti, sistem operasi macOS High Sierra, dan layar 13.3 inch'
    });
    await Product.create({
        name: 'Realme C21',
        description: 'Realme C21, prosesor Qualcomm Snapdragon 855, RAM 4GB, vga GeForce RTX 2060, sistem operasi Android 10, dan layar 6.67 inch'
    });
}