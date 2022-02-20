const sequelize = require('../config/connection');
const seedComments = require("./commentSeed");
const seedUsers = require("./userSeed");
const seedPosts = require("./postSeed");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("DATABASE SYNCED");

  await seedComments();
  console.log("DATABASE SYNCED");

  await seedUsers();
  console.log("DATABASE SYNCED");

  await seedPosts();
  console.log("DATABASE SYNCED");

  process.exit(0);
};

seedDatabase();
