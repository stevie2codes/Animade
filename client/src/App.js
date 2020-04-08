import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import animations from "./pages/animations";
import Contact from "./pages/contact";
import NavBar from "./components/nav/nav";
import Playground from "./pages/playground";
import "./App.scss";
import "./sass/navbar.scss";
import newLogo from "./mono-logo.svg";
import UserLogin from "./pages/createUser";
import Profile from "./pages/profile";

// import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <div className="nav nav-pills d-flex justify-content-end">
          <Link to="/">
            <img src={newLogo} className="iconAbove" id="logoSvg" alt="logo" />
          </Link>

          <div className="navigation">
            <div className="nav-items d-flex">
              <Link to="/" className="nav-link ">
                Home
              </Link>
              <Link to="/animations" className="nav-link ">
                Animations
              </Link>
              <Link to="/playground" className="nav-link ">
                Playground
              </Link>
              <Link to="/Contact" className="nav-link ">
                Contact
              </Link>
              <Link to="/signup" className="nav-link ">
                Sign-In
              </Link>
            </div>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/animations" component={animations} />
        <Route exact path="/playground" component={Playground} />
        <Route exact path="/signup" component={SignIn} />
        <Route exact path="/signin" component={UserLogin} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Profile" component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
