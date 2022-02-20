const { Post } = require("../models");

const postData = [
    {
        title: "Portal",
        post_content: "Name an iconic quote from this game series",
        date_created: 7/1/2021,
        user_id: 1,
    },
    {
        title: "Misquotes",
        post_content: "What is a commonly misquoted line from a movie?",
        date_created: 7/1/2021,
        user_id: 2,
    },
    {
        title: "Favorite Lines",
        post_content: "What are your favorite lines from a game series?",
        date_created: 7/1/2021,
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;