const { User } = require('../models');

const userData = [
  {
    username: "James",
    email: "JamesSmith@gmail.com",
    password: "1feb1981"
  },
  {
    username: "Christopher",
    email: "ChristopherAnderson@gmail.com",
    password: "2mar1981"
  },
  {
    username: "Ronald",
    email: "RonaldClark@gmail.com",
    password: "3apr1981"
  },
  {
    username: "Mary",
    email: "MaryWright@gmail.com",
    password: "4may1981"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;