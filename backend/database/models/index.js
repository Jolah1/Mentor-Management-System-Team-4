/* eslint-disable global-require */
/* eslint-disable security/detect-non-literal-require */
/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dbConfig from '../../config/config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
