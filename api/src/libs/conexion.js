const {Sequelize} = require('sequelize');
const {config} = require('../config/config');


const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);

const URL = `postgres://${USER}:${PASSWORD}@localhost:${config.db_port}/${config.db_name}`;

const sequelize = new Sequelize(URL, {
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;