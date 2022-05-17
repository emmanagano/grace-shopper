const express = require("express");
const { getUser, createUser, checkIfUserExists } = require("../db/user");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.post("/register", async(req, res) => {
    const {username, email} = req.body;
    try {
        const checkUser = await checkIfUserExists({username: username, email: email});
        if (checkUser) {
            res.send({
                error: " The username/email already exists"
            })
        }
        const user = await createUser(req.body);
        if(user) {
            delete user.password;
            const token = jwt.sign({
                id: user.id,
                username: user.username
            }, process.env.SECRET_KEY, {
                expiresIn: "1w"
            });
            user.token = token;
            res.send({
                message: "You are now registered",
                user
            });
        };
    } catch (error) {
        res.send("There is an error during register");
    }
});

userRouter.post("/login", async(req, res) => {
    try {
        const user = await getUser(req.body);
        if (!user) {
            res.send({error: "No user found."});
        }
        const token = jwt.sign({
            id: user.id,
            username: user.username
        }, process.env.SECRET_KEY, {
            expiresIn: "1w"
        });
        if (token) {
            user.token = token;
            res.send({
                message: "You are logged in!",
                user
            })
        };
    } catch (error) {
        res.send({
            error: error.message
        })
    }
});

userRouter.get("/me", async(req, res) => {
    try {
        if(req.user) {
            res.send(req.user)
        };
    } catch (error) {
        res.send({
            error: error.message
        })
    }
});

module.exports = userRouter;