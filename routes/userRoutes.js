const express = require("express");
const user_router = express.Router();
const db = require("../models");

user_router.post("/api/createUser", (req, res) => {
    db.User.create(req.body).then(data => {
        console.log(`This is from createUser route: ${data}`);
        res.json(data);
    })
    .catch(err => console.log(err));
});

user_router.get("/api/Users", (req, res) => {
    db.User.find({}).then(data => {
        console.log(`This is from Users route: ${data}`);
        res.json(data);
    })
    .catch(err => console.log(err));
});

module.exports = user_router;