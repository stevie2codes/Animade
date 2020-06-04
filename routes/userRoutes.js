const express = require("express");
const user_router = express.Router();
const { User } = require("../models");
const {sessionizeUser} = require("../utils/helpers");


user_router.post("/signup", async(req, res) => {

    try{
        const newUser = new User(req.body);
        const sessionUser = sessionizeUser(newUser)
        await newUser.save();

        req.session.user = sessionUser;

        res.cookie("name", sessionUser.username, {secure: process.env.NODE_ENV === true});   
        res.send(sessionUser);

    }catch(error){
        console.log(error);
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
                return  res.status(400).send({message: "The password is incorrect"});
            }
            
            const sessionUser = sessionizeUser(user);
            req.session.user = sessionUser;
           
            res.cookie("name", sessionUser.username, { secure: process.env.NODE_ENV === true}); 
            req.session.save;
            res.send(sessionUser);
        });


    }catch(error){
        console.log(error);
        res.status(500).send(error);
       
    }
});

//checks to see if user is logged in
user_router.get("/*", ({session: { user }}, res) => {
    res.send({ user });
})

module.exports = user_router;