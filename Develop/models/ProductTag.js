// Requires sequelize
const { Model, DataTypes } = require('sequelize');
// Requires SQL connection
const sequelize = require('../config/connection');
// Create ProductTag model
class ProductTag extends Model {}
// Create fields and rules for ProductTag model
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  product_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Product',
          key: 'id'
      }
  },
  tag_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Tag',
          key: 'id'
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
// Export ProductTag model
module.exports = ProductTag;