const express = require("express");
const admin_router = express.Router();
const db = require("../models");

//set up post routes here to be used by postman, to post our admin created
//animations
admin_router.post("/api/adminAnimations", (req, res) => {
    console.log(`This is the request body ${req.body}`);
    db.admin_Animation.create(req.body).then(data => {
        console.log(`This is the data from mongoose.create: ${data}`);
        res.json(data);
    })
    .catch(err => console.log(err));
});

admin_router.get("/api/adminAnimations", (req, res) => {
    db.admin_Animation.
});


module.exports = admin_router;