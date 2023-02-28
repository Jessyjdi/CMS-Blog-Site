const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comments-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n\t****Database****\n');
  await seedUsers();
  console.log('\n\t---Added User----\n');
  await seedPosts();
  console.log('\n\t----Added Post----\n');
  await seedComments();
  console.log('\n\t----Added Comments----\n');

  process.exit(0);
};

seedAll();