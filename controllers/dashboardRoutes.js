const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// url is /dashboard

// get all user's posts
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const posts = userData.get({ plain: true });
    res.render("dashboard", {
      ...posts,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// displays create post screen
router.get("/create", withAuth, async (req, res) => {
  try {
    res.render("create-post", {
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// displays update/delete post screen
router.get("/update/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: { exclude: ["user_id"] },
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        {
          model: Comment,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });

    if (!postData) {
      res.status(404).json("No posts found with this ID!");
    }

    const post = postData.get({ plain: true });

    // if (req.session.user_id === post.user_id) {
    res.render("update-post", {
      ...post,
      loggedIn: true,
    });
    // }
    // Don't need to check if user since you can only go to your own page
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;