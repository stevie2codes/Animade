import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import animations from "./pages/animations";
import Contact from "./pages/contact";
import Nav from "./components/nav/nav";
import "./App.scss";

// import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="nav nav-pills d-flex justify-content-end">
          <div className="navigation">
            <h1 className="logo">Animade</h1>
            <div className="nav-items d-flex">
              <Link to="/" className="nav-link ">
                Home
              </Link>
              <Link to="/animations" className="nav-link ">
                animations
              </Link>
              <Link to="/SignIn" className="nav-link ">
                Sign In
              </Link>
              <Link to="/Contact" className="nav-link ">
                Contact
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
