const express = require('express');
const jwt = require('jsonwebtoken');
const { 
    getUserByUsername, 
    getUserByEmail, 
    createUser,
    getUser
} = require('../db/user');
const userRouter = express.Router();

userRouter.post('/register', async (req, res, next) => {
    const { email, username, password } = req.body;

    try {
        const user = await getUserByUsername({username});

        if (user) {
            next({
                name: 'UserExistsError',
                message: 'Username already exists',
            });
            return;
        }

        const userEmail = await getUserByEmail({email});

        if (userEmail) {
            next({
                name: 'UserEmailExistsError',
                message: 'User with that email already exists',
            });
            return;
        }

        const newUser = await createUser({ email, username, password });

        const token = jwt.sign(
        {
            id: newUser.id,
            username: newUser.username,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1w',
        }
        );
        newUser.token = token;
        res.send({
            user: newUser,
        });
    } catch (error) {
        res.send({error: error.message})
    }
});
userRouter.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        next({
            name: 'MissingCredentialsError',
            message: 'Please supply both a username and password',
        });
    }

    try {
        const user = await getUser({ username, password });

        if (!user) {
            res.send({ error: 'No user found' });
        }

        const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
        },
        process.env.SECRET_KEY
        );

        user.token = token;

        res.send({
            message: "you're logged in!!!",
            token,
        });
    } catch (error) {
        res.send({error: error.message});
    }
});


module.exports = userRouter;