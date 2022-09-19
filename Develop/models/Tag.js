// Require sequelize
const { Model, DataTypes } = require('sequelize');
// Require SQL connection
const sequelize = require('../config/connection.js');
// Create Tag model
class Tag extends Model {}
// Create fields and rules for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  tag_name: {
      type: DataTypes.STRING
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// Export Tag model
module.exports = Tag;