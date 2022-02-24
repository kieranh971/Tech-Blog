const { Comment } = require("../models");

const commentData = [
    {
        comment_content: "The cake is a lie",
        date_created: 7/7/2021,
        user_id: 3,
        post_id: 1,
    },
    {
        comment_content: "Luke I am your father",
        date_created: 7/7/2021,
        user_id: 2,
        post_id: 2,
    },
    {
        comment_content: "I am thou, thou art I",
        date_created: 7/7/2021,
        user_id: 1,
        post_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;