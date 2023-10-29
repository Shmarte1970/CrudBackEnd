"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('prusuarios', 'admin', 'admin2023', {
    /*Acceso a BBDD de AWS
    
    host: 'testbbdd.c00tjquuyvht.eu-north-1.rds.amazonaws.com',
    dialect: 'mysql'
  });
*/
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = sequelize;
