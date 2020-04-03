const express = require("express");
const mongoose = require("mongoose");
const admin_router = require("./routes/api/adminAPIRoute");
const user_router = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//must check to see what environment we are in, to serve up the correct
//filepath to the index.html for SPA's
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}



app.use(admin_router);
app.use(user_router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animade_db");

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}`);
});