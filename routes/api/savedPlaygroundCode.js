const express = require("express");
const playgroundApiRouter = express.Router();
const { savedPlaygroundCode } = require("../../models");

playgroundApiRouter.get("/api/playground_code", async(req, res) => {
    try{
        const username = req.session.user.username;
        let savedUserCode = await savedPlaygroundCode.find({username: username});
        console.log(savedUserCode);

        res.send(savedUserCode);
    }catch(error){
        console.log(error);
    }
    
});
    
playgroundApiRouter.post("/api/playground_code", async(req, res) => {
    try{
        let newSavedUserCode = new savedPlaygroundCode(req.body);

        console.log(newSavedUserCode);
        newSavedUserCode.save();
        res.send(newSavedUserCode);
    }catch(error){
        console.log(error);
    }
    
});

module.exports = playgroundApiRouter;