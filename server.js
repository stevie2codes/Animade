const express = require("express");

const mongoose = require("mongoose");
const admin_router = require("./routes/adminPostRoute");
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(admin_router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animade_db");


app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}`);
});
