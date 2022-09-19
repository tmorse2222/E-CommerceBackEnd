// Requires sequelize
const { Model, DataTypes } = require('sequelize');
// requires SQL connection
const sequelize = require('../config/connection.js');
// Create Category model
class Category extends Model {}
// Build Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  category_name: {
      type: DataTypes.STRING,
      allowNull: false
  }
},
  {
    sequelize,
    timestamps: false,
    tableName: 'category',
    underscored: true,
    modelName: 'category',
  }
);
// Export Category model
module.exports = Category;