//check for logged in users
let sessionChecker = (req, res, next) => {
    if(res.session.user && req.cookies.user_sid){
      res.redirect("/animations");
    }else {
      next();
    }
  }

  module.exports = {
      sessionChecker: sessionChecker
  }