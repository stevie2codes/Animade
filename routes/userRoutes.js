const express = require("express");
const user_router = express.Router();
const { User } = require("../models");
const {sessionizeUser} = require("../utils/helpers");

user_router.post("/signup", async(req, res) => {

    try{
        const newUser = new User(req.body);
        const sessionUser = sessionizeUser(newUser)
        await newUser.save();
        console.log(req.session);
        req.session.user = sessionUser;
        res.send(sessionUser);

    }catch(error){
        res.status(500).send(error);
    }

});

user_router.post("/signin", async(req, res) => {
    try{
        let user = await User.findOne({username: req.body.username});
        
        if(!user){
            return res.status(400).send({message: "The username does not exist in our system."}).redirect("/signup");
        }
        user.comparePassword(req.body.password, (error, match) => {
            if(!match) {
                return res.status(400).send({message: "The password is incorrect"});
            }
            console.log(user);
            const sessionUser = sessionizeUser(user);
            req.session.user = sessionUser;
            console.log(`Session user: ${req.session.user}`);
            res.send(sessionUser);
        });


    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
});

module.exports = user_router;