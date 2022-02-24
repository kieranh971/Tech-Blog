const { User } = require("../models");

const userData = [
    {
        username: "GLaDoS",
        password: "test12",
    },
    {
        username: "LordV",
        password: "test12",
    },
    {
        username: "ArseneMain",
        password: "test12",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;