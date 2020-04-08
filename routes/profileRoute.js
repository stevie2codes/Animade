const express = require("express");
const profile_router = express.Router();
const { User } = require("../models");
const sessionUser = require("./userRoutes");

profile_router.get("/api/Profile", (req, res) => {
    console.log(req.session.cookie);
})

module.exports = profile_router;