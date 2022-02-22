const commentRoutes = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require ("../../utils/auth")

commentRoutes.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        if (!commentData) {
            res.status(400).json("No users");
            return;
        }
        res.status(200).json(commentData);
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});
// post new comment
commentRoutes.post("/:id", withAuth, async (req, res) => {
    console.log("If you're seeing this, it works")
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.params.id,
        });
        res.status(200).json(commentData)
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = commentRoutes