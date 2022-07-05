const config = require('../config/db.config');
const Sequelize = require("sequelize");
// console.log(config);

const sequelize = new Sequelize(
    config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

const db =  {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require('./product')(sequelize, Sequelize);


module.exports = db;