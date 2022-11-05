const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('type', {
        id:{
            type: DataTypes.UUID, // ID unica para que no se repita con los de Api
            defaultValue: DataTypes.UUID, // Si no se provee una se hace automaticamente un que no se repita con los de Api
            allowNull: false, // No te permito que este vacio
            primaryKey: true // Va a ser la PK
          },
          name: {
            type: DataTypes.ENUM(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "shadow", "unknown"]),
            defaultValue: "unknown",
          },
    });
};