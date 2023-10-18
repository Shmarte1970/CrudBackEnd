import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    usuarios: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    poblacion:{
        type: DataTypes.STRING
    },
    dadoDeAlta:{
        type: DataTypes.STRING
    }
}, {
    createdAt:false,
    updatedAt:false
});

export default Usuario;