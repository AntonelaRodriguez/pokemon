const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID, // ID unica para que no se repita con los de Api
      defaultValue: DataTypes.UUIDV4, // Si no se provee una se hace automaticamente un que no se repita con los de Api
      allowNull: false, // No te permito que este vacio
      primaryKey: true // Va a ser la PK
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // // No te permito que este vacio
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
    }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
    }
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
    }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
    }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
    }
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    // Para hacer una distincion entre lo que trae la api y la base de datos
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  { timestamps: false }
  );
};
