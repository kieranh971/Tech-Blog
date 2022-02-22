const router = require("express").Router();
const userRoutes = require("./userRoute");
const commentRoutes = require("./commentRoute");
const postRoutes = require("./postRoute");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;