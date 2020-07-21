'use strict';
const {
  Model
} = require('sequelize');
const crypto = require('crypto');

const conf = require('../config/');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    correctPassword(password) {
      return User.hashPassword(password, this.salt) === this.password;
    };
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
    last_login: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.generateSalt = () => {
    return crypto.randomBytes(64).toString('hex');
  };

  User.hashPassword = (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, conf.hash.iterations, conf.hash.keylen, conf.hash.algorithm).toString('base64');
  };

  User.isValidPassword = password => {
    return password.length >= 8;
  }

  User.isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return User;
};