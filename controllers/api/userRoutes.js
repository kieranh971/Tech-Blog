const userRoutes = require("express").Router();
const { User } = require("../../models");

// url here is /api/users

userRoutes.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        if (!userData) {
            res.status(400).json("No users")
            return;
        }
        res.status(200).json(userData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// create new user
userRoutes.post('/', async (req, res) => {
    try {
        const userData = await User.Create(req.body);
        req.session.save (()=>{
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            res.status(200).json(userData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// existing user login
userRoutes.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        if (!userData) {
            res.status(400).json({message: "Incorrect username or password, please try again"})
            return;
        }
        // check if password entered matches user's password
        const validatePassword = await userData.checkPassword(req.body.password);
        if (!validatePassword) {
            res.status(400).json({message: "Incorrect username or password, please try again"})
            return;
        }

        // on login, set up sessions var 'loggedIn' and UID;
        req.session.save(()=>{
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            res.status(200).json({
                user: userData,
                message: "Login successful! Welcome!"
            });
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// user logout
userRoutes.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(()=>{
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = userRoutes;