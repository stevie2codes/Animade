const express = require("express");
const user_router = express.Router();
const { User } = require("../models");

user_router.post("/signup", async(req, res) => {

    try{
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);

    }catch(error){
        res.status(500).send(error);
    }
});



module.exports = user_router;