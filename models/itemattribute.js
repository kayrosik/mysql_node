'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ItemAttribute.init({
    itemId: DataTypes.INTEGER,
    attributeId: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ItemAttribute',
  });

  ItemAttribute.associate = function(models) {
    ItemAttribute.belongsTo(models.Item, {
      foreignKey: 'itemId'
    });
    ItemAttribute.belongsTo(models.Attribute, {
      foreignKey: 'attributeId'
    });
  };
  return ItemAttribute;
};