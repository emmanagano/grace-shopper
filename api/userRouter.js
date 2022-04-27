const express = require('express');
const jwt = require('jsonwebtoken');
const { 
    getUserByUsername, 
    getUserByEmail, 
    createUser
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

module.exports = userRouter;