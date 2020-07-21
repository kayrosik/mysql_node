'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ItemCategory.init({
    itemId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemCategory',
  });

  ItemCategory.associate = function(models) {
    ItemCategory.belongsTo(models.Item, {
      foreignKey: 'itemId'
    });
    ItemCategory.belongsTo(models.Category, {
      foreignKey: 'categoryId'
    });
  };
  return ItemCategory;
};