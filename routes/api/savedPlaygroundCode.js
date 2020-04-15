const express = require("express");
const playgroundApiRouter = express.Router();
const { savedPlaygroundCode } = require("../../models");

playgroundApiRouter.get("/api/playground_code", async(req, res) => {
    try{
        
        const username = req.cookies.name;
        let savedUserCode = await savedPlaygroundCode.find({username: username});
        

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

playgroundApiRouter.put("/api/playground_code", async(req, res) => {
    try{
        savedPlaygroundCode.findOneAndUpdate({_id: req.body.id}, {$set:{html: req.body.html, css: req.body.css, js: req.body.js}}, (err, doc) => {
            if(err) console.log(err);

            res.send(doc);
        })
    }catch(error){
        console.log(error);
    }
})

module.exports = playgroundApiRouter;