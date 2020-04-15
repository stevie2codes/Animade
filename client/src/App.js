import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import animations from "./pages/animations";
import Contact from "./pages/contact";
import Playground from "./pages/playground";
import "./App.scss";
import "./index.scss";
import "./sass/navbar.scss";
import UserLogin from "./pages/createUser";
import Profile from "./pages/profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/animations" component={animations} />
        <Route  path="/playground/:id?" component={Playground} />
        <Route exact path="/signup" component={SignIn} />
        <Route exact path="/signin" component={UserLogin} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Profile" component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
