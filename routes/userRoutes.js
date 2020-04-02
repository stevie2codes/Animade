const express = require("express");
const user_router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcryptjs");

user_router.post("/signup", async(req, res) => {

    try{
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);

    }catch(error){
        res.status(500).send(error);
    }
});

user_router.post("/signin", async(req, res) => {
    try{
        let user = await User.findOne({username: req.body.username});
        
        if(!user){
            return res.status(400).send({message: "The username does not exist in our system."})
        }
        user.comparePassword(req.body.password, (error, match) => {
            if(!match) {
                return res.status(400).send({message: "The password is incorrect"});
            }
        });

        res.send({message: "Login credentials are correct."});

    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
})

module.exports = user_router;