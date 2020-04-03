const express = require("express");
const mongoose = require("mongoose");
const admin_router = require("./routes/api/adminAPIRoute");
const user_router = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//hopefully makes heroku routing work
app.get("*", (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(__dirname, '/index.html');
});

app.use(admin_router);
app.use(user_router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animade_db");

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}`);
});