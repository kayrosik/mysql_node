'use strict';
const {
  Model
} = require('sequelize');
const crypto = require('crypto');

const conf = require('../config/');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    itemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    transactionData: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });

  Order.associate = models => {
    Order.belongsTo(models.Item, {
      foreignKey: 'itemId'
    });
    Order.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  /**
   * @param {String} data 
   * @returns {String}
   */
  Order.encryptTransaction = data => {
    const iv = crypto.randomBytes(conf.encryption.ivlength);
    const key = crypto.createHash('sha256').update(conf.encryption.key).digest('base64').substr(0, 32);
    const cipher = crypto.createCipheriv(conf.encryption.algorithm, key, iv);
    let ciphered = cipher.update(data, conf.encryption.inputEncoding, conf.encryption.outputEncoding);
    ciphered += cipher.final(conf.encryption.outputEncoding);
    const ciphertext = iv.toString(conf.encryption.outputEncoding) + ':' + ciphered;

    return ciphertext;
  };

  return Order;
};
