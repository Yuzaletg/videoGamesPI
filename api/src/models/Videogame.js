const { DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        // unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL,
      },
      platforms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      background_image: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
      createdAt: "creado",
      updatedAt: false,
    }
  );
};
