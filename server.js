const express = require("express");
const mongoose = require("mongoose");
const user_router = require("./routes/userRoutes");
const playgroundAPI_router = require("./routes/api/savedPlaygroundCode");
const path = require("path");
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const MongoStore = require("connect-mongo")(session);


const app = express();
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("dev"));

//middleware
app.use(body_parser.urlencoded({ extended: true }));
app.use(cookie_parser());
app.use(express.json());

//initialize express session
app.use(session({
  key: "user_sid",
  secret: "canyoufeelthelovetonight",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  cookie :{
    sameSite: true, 
    secure: process.env.NODE_ENV === "production",
  }
}));

//middleware to check if user's cookie is still saved
//if not, log the user out
app.use((req, res, next) => {
  if(req.cookies.user_sid && !req.session.user){
    res.clearCookie("user_sid");
  }
  next();
});


//must check to see what environment we are in, to serve up the correct
//filepath to the index.html for SPA's
app.use(playgroundAPI_router);
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





app.use(user_router);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animade_db");

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}`);
});