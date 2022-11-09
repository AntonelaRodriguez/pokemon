const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Type', {
          name: {
            type: DataTypes.ENUM(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "shadow", "unknown"]),
            defaultValue: "unknown",
          },
    },
    { timestamps: false }
    );
};