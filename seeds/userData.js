const { User } = require('../models');


const userData = [
    {
      "username": "leci@gmail.com",
      "password": "pass1234"
    },
    {
      "username": "kp@gmail.com",
      "password": "pass1234"
    },
    {
      "username": "rt@yahoo.com",
      "password": "pass1234"
    },
    {
      "username": "lukey@yahoo.com",
      "password": "pass1234"
    },
    {
      "username": "klettso@comcast.net",
      "password": "pass1234"
    }
  ];
  

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedData;
