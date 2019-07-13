'use strict';
const bcrypt = require('bcrypt');

const hashPassword = plain => {
  const saltRounds = 10;
  return bcrypt.hashSync(plain, saltRounds);
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Administrator',
        email: 'admin@admin.com',
        password: hashPassword('nopass')
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users');
  }
};
