const sequelize = require('../config/connection');
const seedComments = require("./commentData");
const seedUsers = require("./userData");
const seedPosts = require("./postData");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("DATABASE SYNCED");

  await seedUsers();
  console.log("\n---- USERS SEED SUCCESSFUL ----\n");

  await seedPosts();
  console.log("\n---- POSTS SEED SUCCESSFUL ----\n");

  await seedComments();
  console.log("\n---- COMMENTS SEED SUCCESSFUL ----\n");

  process.exit(0);
};

seedDatabase();
