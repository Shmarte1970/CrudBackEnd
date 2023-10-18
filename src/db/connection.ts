import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('prUsuarios', 'root', 'root2023', {

    /*Acceso a BBDD de AWS */ 
    
    host: 'testbbdd.c00tjquuyvht.eu-north-1.rds.amazonaws.com',
    dialect: 'mysql'
  });

  export default sequelize;