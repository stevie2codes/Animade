import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import animations from "./pages/animations";
import Contact from "./pages/contact";
import NavBar from "./components/nav/nav";
import "./App.scss";
import logo from "./logo.svg";

// import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <div className="nav nav-pills d-flex justify-content-end">
          <img src={logo} className="iconAbove" id="logoSvg" alt="logo" />
          {/* <h1 className="logo d-flex justify-content-start">ANiMaDE</h1> */}
          <div className="navigation">
            <div className="nav-items d-flex">
              <Link to="/" className="nav-link ">
                Home
              </Link>
              <Link to="/animations" className="nav-link ">
                animations
              </Link>
              <Link to="/Contact" className="nav-link ">
                Contact
              </Link>
              <Link to="/SignIn" className="nav-link ">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/animations" component={animations} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
