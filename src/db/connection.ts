import {Sequelize} from 'sequelize';



const sequelize = new Sequelize('prusuarios', 'admin', 'admin2023', {

    /*Acceso a BBDD de AWS 
    
    host: 'testbbdd.c00tjquuyvht.eu-north-1.rds.amazonaws.com',
    dialect: 'mysql'
  });
*/
  

  host: 'localhost',
  dialect: 'mysql',

});


  export default sequelize;